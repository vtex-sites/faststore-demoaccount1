import { gql } from '@generated/gql'

export const GetRoomIdeas = gql`
  query GetRoomIdeas($id: String!) {
    GetRoomIdeas(id: $id) {
      callToActionBtn {
        text
        newWindow
      }
      returnBtn {
        text
        url
        newWindow
      }
      roomIdeas {
        id
        ID
        image
        name
        order
        url
      }
    }
  }
`
