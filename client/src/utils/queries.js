import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
query getProjects {
  projects {
    _id
    name
    description
    open
    price
  }
}
`;

export const QUERY_PROJECT = gql`
query getProject($id: ID!) {
  project(_id: $id) {
    _id
    name
    description
    open
    price
  }
}
`;

export const QUERY_USER = gql`
query getUser {
  user {
    _id
    firstName
    lastName
    email
    createdProjects {
      _id
      name
      description
      open
      price
    }
    developingProjects {
      _id
      name
      description
      open
      price
    }
  }
}
`;