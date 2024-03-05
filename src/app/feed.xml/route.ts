import RSS from 'rss'
import config from '@config'
import { metadata } from '@content/metadata'
import devToProvider from '@provider/dev.to/devto.provider'

const { appUrl: siteURL, personName } = config

export async function GET() {

    const feed = new RSS({
        title: personName,
        description: metadata.description,
        site_url: siteURL,
        feed_url: `${siteURL}/feed.xml`,
        language: 'en',
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, ${personName}`,
    })

    const blogs = await devToProvider.getPageOfPosts().catch(() => null)
    if (!blogs) {
        return new Response(feed.xml({ indent: true }), {
            headers: {
                'Content-Type': 'application/atom+xml; charset=utf-8',
            },
        })
    }

    blogs.map(({ title, published_at, description, slug }) => {
        feed.item({
            title,
            url: `${siteURL}/blogs/${slug}`,
            date: new Date(published_at),
            description,
        })
    })

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    })
}


