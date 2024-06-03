import { GetRoomIdeas } from './queries/getRoomIdeas'
import { GetRoomScenes } from './queries/getRoomScenes'

const QueriesResolvers = {
  Query: {
    GetRoomIdeas,
    GetRoomScenes,
  },
}

export default QueriesResolvers
