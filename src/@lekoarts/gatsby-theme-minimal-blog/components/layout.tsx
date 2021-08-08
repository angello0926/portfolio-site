/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
import "@fontsource/bodoni-moda"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(customTheme) => ({
        "*": {
          boxSizing: `inherit`
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `body`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: customTheme.colors.text,
          color: customTheme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout
