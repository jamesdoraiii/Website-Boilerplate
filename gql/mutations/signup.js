import gql from 'graphql-tag'

export const GET_USERS = gql`
  mutation signUp($payload: UserInput!) {
    createUser(input: $payload) {
      id
      name
      email
    }
  }
`
