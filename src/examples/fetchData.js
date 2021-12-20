import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//info defines an alias so we dont use very long names such as siteMetadata - see destructuring in the FetchData variable

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>Name: {data.site.info.person.name}</h1> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
