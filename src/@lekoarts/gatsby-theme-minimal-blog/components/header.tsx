/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
       <HeaderTitle/>
        <Navigation nav={nav} />
        <div sx={{display: `flex`}}>
          <HeaderExternalLinks isDark={colorMode === `dark`} />
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </div>

      </Flex>
    </header>
  )
}

export default Header
