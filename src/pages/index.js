import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home page!</h1>
        <ExampleButton>CLICK ME</ExampleButton>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi
          totam enim corporis harum sed, magni aspernatur distinctio optio
          molestias iure repellendus laudantium vel quo dolorem quidem impedit
          odit itaque!
        </p>
      </div>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  )
}
