import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1> about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum
          quis aliquid distinctio commodi iure quae incidunt similique,
          molestiae modi tempore dolor voluptates. Mollitia tempore aspernatur
          ut quaerat, recusandae aliquam?
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellow;
  }

  .text {
    text-transform: uppercase;
  }
`
export default about
