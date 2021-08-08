/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import ProjectHighlights from './project-highlights';
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-minimal-blog-config";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils";
// @ts-ignore
import Hero from "../texts/hero";
import About from "../texts/about";
import Projects from "../texts/projects";
// @ts-ignore
import Bottom from "../texts/bottom";
import { Grid, Box } from "theme-ui";

type PostsProps = {
posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
    name: string;
    slug: string;
    }[];
}[];
[key: string]: any;
};

const Homepage = ({ posts }: PostsProps) => {
const { basePath, blogPath } = useMinimalBlogConfig();
const { siteTitle } = useSiteMetadata();

return (
    <Layout>
        <h1 sx={visuallyHidden}>{siteTitle}</h1>
        <section
            sx={{
            mb: [3, 4, 5],
            p: { fontSize: [6, 7, 8], mt: 2, fontFamily: `heading` },
            variant: `section_hero`
            }}
        >
            <Hero />
            <Grid gap={2} columns={[2, "1fr 2fr"]}>
            <Box>
                <h4 sx={{ margin: 0 }}>About</h4>
            </Box>
            <Box>
                <About />
            </Box>
            <Box>
                <h4 sx={{ margin: 0 }}>Projects</h4>
            </Box>
            <Box>
                <Projects />
            </Box>
            </Grid>
        </section>

        <ProjectHighlights />
        <section sx={{pt: 40}} >
        <Title text="Latest posts">
            <Link  to={replaceSlashes(`/${basePath}/${blogPath}`)}>
            Read all posts
            </Link>
        </Title>
        <Listing posts={posts} showTags={false} />
        <List sx={{ variant: `section_bottom` }}>
            <Bottom />
        </List>
        </section>

    </Layout>
);
};

export default Homepage;
