import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

// this is the component that will render the tags, we return a link to each tag/page
//used a helper function setupTags
//passing "recipes as props" to the component

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
