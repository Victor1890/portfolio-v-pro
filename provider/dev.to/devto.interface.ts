export interface IArticleDevTo {
    type_of: string
    id: number
    title: string
    description: string
    cover_image: string
    readable_publish_date: string
    social_image: string
    tag_list: string[]
    tags: string
    slug: string
    path: string
    url: string
    canonical_url: string
    comments_count: number
    positive_reactions_count: number
    public_reactions_count: number
    collection_id: any
    created_at: string
    edited_at: string
    page_views_count: number,
    crossposted_at: any
    published_at: string
    last_comment_at: string
    published_timestamp: string
    reading_time_minutes: number
    body_html?: string
    body_markdown?: string
    user: User
    organization?: Organization
}

interface User {
    name: string
    username: string
    twitter_username: string
    github_username: string
    website_url: string
    profile_image: string
    profile_image_90: string
}

interface Organization {
    name: string
    username: string
    slug: string
    profile_image: string
    profile_image_90: string
}


export interface IFollowDevTo {
    type_of: string
    id: number
    created_at: string
    user_id: number
    name: string
    path: string
    username: string
    profile_image: string
}
