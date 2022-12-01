import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects($owner: ID) {
    projects(owner: $owner) {
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

export const QUERY_USER = qgl`
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
        developers {
          _id
          firstName
          lastName
          email
        }
      }
    }
  }
`;