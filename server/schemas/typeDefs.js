const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        createdProjects: [Project]
        developingProjects: [Project]
    }

    type Checkout {
        session: ID
      }

    type Project {
        _id: ID
        name: String
        description: String
        open: Boolean
        price: Float
        owner: User
        developers: User

    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        projects: [Project]
        project(projectId: ID!): Project
        checkout(project: [ID]!): Checkout
        me: User
    }

    type Mutation {
        addUser(
            firstName: String!
            lastName: String!
            email: String!
            password: String!
        ): Auth
        updateUser(
            firstName: String
            lastName: String
            email: String
            password: String
        ): User
        login(
            email: String!
            password: String!
        ): Auth
    }
`;
//add mutations once resolvers are finished

module.exports = typeDefs;