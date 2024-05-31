import { roomIdeas } from './queries/getRoomIdeas'
import { GetUserInformation } from './queries/getUserInformation'

const QueriesResolvers = {
  Query: {
    roomIdeas,
    GetUserInformation,
  },
}

export default QueriesResolvers
