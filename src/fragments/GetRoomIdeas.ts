import { gql } from '@generated'

export const GetRoomIdeas = gql(`
  query GetRoomIdeas {
    GetRoomIdeas {
      roomIdeas {
        image
        alt
        name
        url
      }
    }
  }
`);
