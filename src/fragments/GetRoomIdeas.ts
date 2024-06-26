import { gql } from '@generated'

export const GetRoomIdeas = gql(`
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
        alt
        name
        order
        url
      }
    }
  }
`);
