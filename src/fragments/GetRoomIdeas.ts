import { gql } from '@faststore/graphql-utils'

export const GetRoomIdeas = gql`
  query GetRoomIdeasQuery() {
    GetRoomIdeas() {
      data
    }
  }
`
