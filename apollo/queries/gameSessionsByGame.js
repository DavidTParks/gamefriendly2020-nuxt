import gql from 'graphql-tag'

export const GAME_SESSIONS_BY_GAME = gql`
  query gameSessionByGame($game: Int!) {
    gameSessionByGame(game: $game) {
      id
    }
  }
`
