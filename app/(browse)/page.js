"use client"

import { useTheme } from "next-themes"
import RightSideBar from "./components/RightSideBar"

export default function Home() {
  const { theme, setTheme } = useTheme()

  const toggleMode = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div className="flex overflow-x-hidden overflow-y-auto">
      <div className="grow bg-background text-foreground h-screen">
        Hello world
        <button className="border-2 font-bold rounded-lg p-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-primary" onClick={toggleMode}>
          Theme
        </button>
      </div>
      <RightSideBar />
    </div>
  )
}
