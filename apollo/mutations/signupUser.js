import gql from 'graphql-tag'

export const SIGNUP_USER = gql`
  # 2
  mutation signupUser(
    $email: String!
    $password: String!
    $username: String!
    $name: String!
  ) {
    signupUser(
      data: {
        email: $email
        password: $password
        username: $username
        name: $name
      }
    ) {
      token
    }
  }
`
