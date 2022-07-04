import { Form, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import 'dist/landing/styles.css'
import 'dist/landing/script.js'
import { Slug, code } from 'src/helper/Helpers'

const CREATE_ROOM = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
    }
  }
`

// eslint-disable-next-line no-undef
const slug = new Slug()

const HomePage = () => {
  const [create, { loading }] = useMutation(CREATE_ROOM)

  const onSubmit = (data) => {
    create({
      variables: {
        input: {
          roomName: data.roomName,
          code: code(),
          slug: slug.slugify(data.roomName).random().string,
        },
      },
    }).then((r) => console.log(r))
    // Redirect to Message after creating
  }

  // TODO: Message UI

  return (
    <>
      <MetaTags
        title="Chatify — Chat with friends."
        description="Chat anonymously."
      />

      <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-5xl font-bold mb-7">
            Send anonymous messages with
            <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              &nbsp;Chatify.
            </span>
          </h1>
          <p className="font-pt-serif font-normal mb-7">
            Create your first Room. Share the link with the code so others can
            join. Have fun chatting anonymously.
          </p>
          <div className="font-pt-serif">
            <Form onSubmit={onSubmit} class="flex">
              <TextField
                validation={{ required: true }}
                name="roomName"
                class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="Room name e.g. My Friends..."
              />
              <Submit
                disabled={loading}
                class="px-4 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
              >
                Create Room
              </Submit>
            </Form>
          </div>
        </div>
        <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <div className="relative">
            <img
              src="../assets/Highlight1.svg"
              alt=""
              className="absolute -top-12 -left-1"
            />
          </div>
          <img
            className="hidden md:inline"
            width="500"
            src="../assets/1.png"
            alt="Macbook"
          />
          <div className="relative">
            <img
              src="../assets/Highlight2.svg"
              alt=""
              className="absolute -bottom-1 -right-1"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-black text-white sectionSize">
        <div>
          <h2 className="secondaryTitle bg-underline2 bg-100%">How it works</h2>
        </div>
        <div className="flex flex-col md:flex-row font-pt-serif">
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              1
            </div>
            <h3 className="font-pt-serif font-medium text-xl mb-2">Create</h3>
            <p className="text-center font-pt-serif">
              Create your room, copy the link and code, and share to friends.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              2
            </div>
            <h3 className="font-pt-serif font-medium text-xl mb-2">Chat</h3>
            <p className="text-center font-pt-serif">
              Start messaging anonymously, instantly in a room.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              3
            </div>
            <h3 className="font-pt-serif font-medium text-xl mb-2">Enjoy</h3>
            <p className="text-center font-pt-serif">
              Have fun while messaging with anonymous friends.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
