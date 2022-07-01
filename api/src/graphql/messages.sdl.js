export const schema = gql`
  type Message {
    id: Int!
    message: String
    user: User!
    userId: Int!
    room: Room!
    roomId: Int!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    message: String
    userId: Int!
    roomId: Int!
  }

  input UpdateMessageInput {
    message: String
    userId: Int
    roomId: Int
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
