import { gql } from '@generated/gql'

export const GetRoomIdeas = gql`
  query GetRoomIdeas($id: String!) {
    GetRoomIdeas(id: $id) {
      name
      slug
      isNavigation
    }
  }
`
