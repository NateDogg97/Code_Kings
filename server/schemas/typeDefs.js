const { gql } = require('apollo-server-express');

//can we change the model for User to be "projects:[Project] instead of orders:[Project]"
const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Project]
    }

    type Project {
        _id: ID
        name: String
        description: String

    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        orders: [Project]
        order(id: ID!): Project
    }
`;
//need to add  isFinished: Boolean   to Project?
//if we have a shopping cart, add checkout typedef

module.exports = typeDefs;