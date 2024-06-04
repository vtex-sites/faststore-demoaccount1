import { gql } from '@generated'

export const GetRoomScenes = gql(`
  query GetRoomScenes($roomId: String!) {
    GetRoomScenes(roomId: $roomId) {
      image
      alt
      collectionId
      roomId
      url
    }
  }
`);
