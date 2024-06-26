import { gql } from '@generated'

export const GetRoomScenes = gql(`
  query GetRoomScenes($roomId: String!) {
    GetRoomScenes(roomId: $roomId) {
      id
      ID
      image
      alt
      collectionId
      roomId
      order
      url
    }
  }
`);
