import {Link, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import 'dist/landing/styles.css'
import 'dist/landing/script.js'
import {Form, Submit, TextField} from "@redwoodjs/forms";

const AboutPage = () => {
  return (
    <>
      <MetaTags title="Chatify — About" description="Chat anonymously." />

      <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-5xl font-bold mb-7">
            About
            <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              &nbsp;Chatify.
            </span>
          </h1>
          <p className="font-pt-serif font-normal mb-7 text-justify">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Welcome to Chatify. We're dedicated to giving you the very best of
            messaging, with a focus on privacy, security, and safety. Founded in
            2022, Chatify has come a long way from its beginnings. We now
            serve&nbsp;
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            customers all over the world, and are thrilled that we're able to
            turn our passion into our own website. We hope you enjoy our
            products as much as we enjoy offering them to you. If you have
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            you have any questions or comments, please don't hesitate to contact
            us as&nbsp;
            <a className="text-blue-700 bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%" href="mail:info@chatify.online">
              info@chatify.online
            </a>
          </p>
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
    </>
  )
}

export default AboutPage
