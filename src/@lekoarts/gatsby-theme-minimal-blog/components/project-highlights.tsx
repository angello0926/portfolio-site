import React from "react"
import { Container, Image} from 'theme-ui'
import { jsx } from 'theme-ui'

const ProjectHighlights = () => {
    return (
        <section sx={{
            p: { fontSize: [6, 7, 8], mt: 2, fontFamily: `heading` },
            variant: `section_hero`,
            mb: [50,100,120],
            pb: [50,100,120]
            }}>
                <a href="/comrade-a-gamified-social-platform-for-sport-players">
                    <Image sx={{width: `100%`, mb: `20px`}} src="/comrade-ui.png" />
                </a>
                <a href="/make-your-day-count-a-productivity-app-for-making-your-habit-sticks">
                    <Image sx={{width: `100%`}} src="/mydc-ui.png" />
                </a>
        </section>

    )
  }
  
  export default ProjectHighlights