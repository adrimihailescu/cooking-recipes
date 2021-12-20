import React from "react"

import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
//using page query in pages NOT in the component

const Testing = () => {
  // const author = data.site.info.author
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

// export const data = graphql`
//   {
//     site {
//       info: siteMetadata {
//         author
//         description
//         simpleData
//         title
//         person {
//           age
//           name
//         }
//         complexData {
//           age
//           name
//         }
//       }
//     }
//   }
// `

export default Testing
