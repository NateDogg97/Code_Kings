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

    }
`;

module.exports = typeDefs;