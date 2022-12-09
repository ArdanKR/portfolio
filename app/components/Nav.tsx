import { Suspense, useState } from "react"
import { IoMenuOutline } from "react-icons/io5"
import Link from "next/link"

const Nav: React.FC<{
  className?: string
  navWhite?: boolean
  bgColor?: string
  logoType?: string
}> = ({ className, navWhite, logoType, bgColor }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`relative z-20 ${open ? "menu-open" : ""} ${className ? className : ""} ${
        navWhite
          ? "border-neutral-700/80 bg-black/80 text-[#fff] "
          : "border-neutral-200/80  "
      }`}
    >
      <nav
        className={`fixed top-0 w-full border-inherit  bg-inherit py-2.5 backdrop-blur-xl transition duration-100`}
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <div className="flex gap-8 py-1">
            <Link href="/">
              <h1 className="text-xl font-bold logo">SH. Park</h1>
            </Link>
          </div>

          <div className="flex items-center justify-evenly space-x-4 text-sm dark:text-gray-100 lg:space-x-8">
            <button id="nav-button" className="py-2 " onClick={() => setOpen(!open)}>
              <IoMenuOutline size={32} />
            </button>
          </div>
        </div>
      </nav>

      <button
        id="overlay"
        className="fixed inset-0 z-40"
        aria-hidden="true"
        onClick={() => setOpen(!open)}
      />

      <div
        id="menu"
        className=" fixed top-0 right-0 z-40 w-full bg-white dark:bg-[#111111] sm:max-w-[50vh] lg:max-w-[30vw] "
      >
        <button
          id="menu-close"
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-4 p-2 sm:left-6"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              d="M3,3 L21,21 M3,21 L21,3"
            ></path>
          </svg>
        </button>

        <div className="h-full flex flex-col">
        <div className="nav-row mt-16 flex flex-col pb-8 text-lg text-black" data-cursor="-opaque">
          <div className="flex p-6 sm:px-8 flex-col gap-y-4">
            <div className="flex">
              <Link href="/about" className="text-3xl underline">About</Link>
            </div>
            <div className="flex">
              <Link href="/work" className="text-3xl underline">Work</Link>
            </div>
          </div>
        </div>
        <div className="absolute p-6 sm:px-8 bottom-0">© Sanghyuk Park.</div>
        </div>
      </div>
    </div>
  )
}
export default Nav
