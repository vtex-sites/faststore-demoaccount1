import { gql } from '@generated'

export const GetRoomIdeas = gql(`
  query GetRoomIdeas($id: String!) {
    GetRoomIdeas(id: $id) {
      roomIdeas {
        image
        alt
        name
        url
      }
    }
  }
`);
