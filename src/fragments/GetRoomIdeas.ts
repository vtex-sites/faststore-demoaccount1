import { gql } from '@faststore/graphql-utils'

export const GetRoomIdeasQuery = gql`
  query GetRoomIdeasQuery($id: String!) {
    roomIdeas(id: $id)
  }
`
