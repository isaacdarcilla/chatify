import { Link, routes } from '@redwoodjs/router'

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
          <div className="flex items-center">
            <img src="../assets/5.png" alt="Logo" className="h-12 rounded-md" />
          </div>
          <ul className="font-pt-serif items-center hidden md:flex">
            <li className="growing-underline mx-3">
              <Link to={routes.home()}>Home</Link>
            </li>
            <li className="growing-underline mx-3">
              <Link to={routes.privacy()}>Privacy</Link>
            </li>
            <li className="growing-underline mx-3">
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
          <div className="font-pt-serif hidden md:block">
            <button className="py-2 px-4 text-white bg-black rounded-3xl">
              Join Chat
            </button>
          </div>
          <div id="showMenu" className="md:hidden">
            <img
              className="mt-3 mx-3"
              src="../assets/logos/Menu.svg"
              alt="Menu icon"
            />
          </div>
        </nav>
        <div
          id="mobileNav"
          className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down"
        >
          <div id="hideMenu" className="flex justify-end">
            <img src="../assets/logos/Cross.svg" alt="" className="h-16 w-16" />
          </div>
          <ul className="font-pt-serif flex flex-col mx-8 my-24 items-center text-3xl">
            <li className="my-6">
              <Link to={routes.home()}>Home</Link>
            </li>
            <li className="my-6">
              <Link to={routes.privacy()}>Privacy</Link>
            </li>
            <li className="my-6">
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <section className="bg-secondary sectionSize">
        <div className="font-pt-serif text-sm">
          ?? 2022 Chatify. All rights reserved
        </div>
      </section>
    </>
  )
}

export default HomeLayout
