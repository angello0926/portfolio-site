/** @jsx jsx */
import React from "react"
import {jsx} from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-minimal-blog-config"

type Props = {
  isDark: boolean
}

const HeaderExternalLinks = ({ isDark }: Props) => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <React.Fragment>
        <div>
            <a href="https://www.linkedin.com/in/angel-lo-yukyu/" target="_blank" sx={{marginRight: `20px`}}>
              <img src={isDark ? "/linkedin-light.svg" : "/linkedin-dark.svg"} alt="LinkedIn" className="social-logo" sx={{ width: "24px"}}/>
            </a>
            <a  href="https://www.pexels.com/@angello-2372341" target="_blank" sx={{marginRight: `20px`}}>
              <img src={isDark ? "/photo-camera-light.svg" : "/photo-camera-dark.svg"} alt="Pexels" className="social-logo" sx={{ width: "24px"}}/>
            </a>          
        </div>
    </React.Fragment>
  )
}

export default HeaderExternalLinks
