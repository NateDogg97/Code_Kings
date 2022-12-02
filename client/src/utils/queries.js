import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      open
      price
      owner {
        _id
        firstName
        lastName
      }
      developer {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
      open
      price
      owner {
        _id
        firstName
        lastName
      }
      developers {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      createdProjects {
        _id
        name
        description
        open
        price
        developers {
          _id
          firstName
          lastName
          email
        } 
      developingProjects {
        _id
        name
        description
        open
        price
        owner {
          _id
          firstName
          lastName
          email
        }
      }
    }
  }
`;