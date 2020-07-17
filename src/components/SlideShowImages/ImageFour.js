import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HomeImage } from "./ImageOne"

export const ImageFour = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fries.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <HomeImage fluid={data.placeholderImage.childImageSharp.fluid} />
}
