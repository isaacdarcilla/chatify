export const schema = gql`
  type Room {
    id: Int!
    roomName: String
    code: String
    slug: String
    users: [User]!
    messages: [Message]!
    createdAt: DateTime!
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: Int!): Room @requireAuth
  }

  input CreateRoomInput {
    roomName: String
    code: String
    slug: String
  }

  input UpdateRoomInput {
    roomName: String
    code: String
    slug: String
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    updateRoom(id: Int!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: Int!): Room! @requireAuth
  }
`
