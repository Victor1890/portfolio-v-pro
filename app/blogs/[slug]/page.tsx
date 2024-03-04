import PageNotFoundPage from "@components/pages/404"
import BlogPostPage from "@components/pages/blogs/slug"
import { IArticle } from "@provider/dev.to/devto.interface"
import devToProvider from "@provider/dev.to/devto.provider"
import { getMDXTableOfContents, getMarkdownSource } from "@utils/mdx.util"
import readTime from 'reading-time'

interface BlogPageProps {
    params: {
        slug: string
    }
}

export async function getBlogBySlug(slug: string) {

    const post = await devToProvider.getArticleBySlug(slug).catch(() => null)

    if (!post) {
        return { error: true, post: null }
    }

    const mdxContent = post.body_markdown as string
    const readingTime = readTime(mdxContent)
    const tableOfContents = getMDXTableOfContents(mdxContent)

    const content = await getMarkdownSource(mdxContent)

    const payload: IArticle = {
        title: post.title,
        slug: post.slug,
        description: post.description,
        cover_image: post.cover_image,
        tags: post.tag_list || [],
        content,
        tableOfContents,
        readingTime,
        published_at: post.published_at,
        reading_time_minutes: post.reading_time_minutes,
        user: post.user,
    }

    return {
        error: false,
        post: payload,
    }
}

const BlogPage = async ({ params }: BlogPageProps) => {

    const { error, post } = await getBlogBySlug(params.slug)
    if (!post || error) return <PageNotFoundPage />

    return <BlogPostPage post={post} />
}

export default BlogPage