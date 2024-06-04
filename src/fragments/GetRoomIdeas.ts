import { gql } from '@generated'

export const GetRoomIdeas = gql(`
  query GetRoomIdeas {
    GetRoomIdeas {
      roomIdeas {
        id
        ID
        image
        alt
        name
        order
        url
      }
    }
  }
`);
