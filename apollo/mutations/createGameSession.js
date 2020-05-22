import gql from 'graphql-tag'

export const CREATE_GAME_SESSION = gql`
  # 2
  mutation CREATE_GAME_SESSION(
    $title: String!
    $active: Boolean!
    $game: Int!
    $description: String!
    $discord: String!
  ) {
    createGameSession(
      data: {
        title: $title
        active: $active
        game: $game
        description: $description
        discord: $discord
      }
    ) {
      data {
        id
      }
    }
  }
`
