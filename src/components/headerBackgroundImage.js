// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import styled from 'styled-components'

// import BackgroundImage from 'gatsby-background-image'

// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         bgImage: file(relativePath: { eq: "header-background.png" }) {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = [
//         data.bgImage.childImageSharp.fluid
//       ]

//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//           <Menu />
//           <HeaderTitle>Piacere, Alessandro.</HeaderTitle>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-size: cover;
// `

// const HeaderTitle = styled.h1`
//   font-family: "Espa";
//   font-size: 133px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex: 8;
// `

// export default StyledBackgroundSection