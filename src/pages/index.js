import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
      <div>
        <h1>Hello world!</h1>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </div>
  )
}
