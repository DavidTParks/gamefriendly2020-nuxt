import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  # 2
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`
