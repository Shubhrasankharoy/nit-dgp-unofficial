"use client"

import RightSideBar from "./components/RightSideBar"

export default function Home() {

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="flex overflow-x-hidden overflow-y-auto">
      <div className="grow bg-primary text-secondary h-screen">
        Hello world
        <button className="border-2 font-bold rounded-lg p-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-primary" onClick={toggleMode}>
          Click me
        </button>
      </div>
      <RightSideBar />
    </div>
  )
}
