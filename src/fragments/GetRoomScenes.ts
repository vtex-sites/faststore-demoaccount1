import { gql } from '@generated/gql'

export const GetRoomScenes = gql`
  query GetRoomScenes($roomId: String!) {
    GetRoomScenes(roomId: $roomId) {
      id
      ID
      image
      collectionId
      roomId
      order
      url
    }
  }
`
