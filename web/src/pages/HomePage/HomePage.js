import { MetaTags } from '@redwoodjs/web'
import { Form, Submit, TextField } from '@redwoodjs/forms'
import 'dist/landing/styles.css'
import 'dist/landing/script.js'

const HomePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags
        title="Chatify — Chat with friends."
        description="Chat anonymously."
      />

      <section class="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div class="md:flex-1 md:mr-10">
          <h1 class="font-pt-serif text-5xl font-bold mb-7">
            Send anonymous messages with
            <span class="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              &nbsp;Chatify.
            </span>
          </h1>
          <p class="font-pt-serif font-normal mb-7">
            Create your first Room. Share the link with the code so others can
            join. Have fun chatting anonymously.
          </p>
          <div class="font-pt-serif">
            <Form onSubmit={onSubmit} class="flex">
              <TextField
                name="room"
                class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="New room name..."
              />
              <Submit class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                Create Room
              </Submit>
            </Form>
          </div>
        </div>
        <div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <div class="relative">
            <img
              src="../assets/Highlight1.svg"
              alt=""
              class="absolute -top-12 -left-1"
            />
          </div>
          <img
            class="hidden md:inline"
            width="500"
            src="../assets/1.png"
            alt="Macbook"
          />
          <div class="relative">
            <img
              src="../assets/Highlight2.svg"
              alt=""
              class="absolute -bottom-1 -right-1"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" class="bg-black text-white sectionSize">
        <div>
          <h2 class="secondaryTitle bg-underline2 bg-100%">How it works</h2>
        </div>
        <div class="flex flex-col md:flex-row font-pt-serif">
          <div class="flex-1 mx-8 flex flex-col items-center my-4">
            <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              1
            </div>
            <h3 class="font-pt-serif font-medium text-xl mb-2">Create</h3>
            <p class="text-center font-pt-serif">
              Create your room, copy the link and code, and share to friends.
            </p>
          </div>
          <div class="flex-1 mx-8 flex flex-col items-center my-4">
            <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              2
            </div>
            <h3 class="font-pt-serif font-medium text-xl mb-2">Chat</h3>
            <p class="text-center font-pt-serif">
              Start messaging anonymously, instantly in a room.
            </p>
          </div>
          <div class="flex-1 mx-8 flex flex-col items-center my-4">
            <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              3
            </div>
            <h3 class="font-pt-serif font-medium text-xl mb-2">Enjoy</h3>
            <p class="text-center font-pt-serif">
              Have fun while messaging with anonymous friends.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
