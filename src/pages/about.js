import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1> about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum
          quis aliquid distinctio commodi iure quae incidunt similique,
          molestiae modi tempore dolor voluptates. Mollitia tempore aspernatur
          ut quaerat, recusandae aliquam?
        </p>
      </div>
    </Layout>
  )
}

export default about
