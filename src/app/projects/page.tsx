import ProjectPage from '@components/pages/project'
import config from '@config'
import { metadata as meta } from '@content/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: meta.projects.title,
    description: meta.projects.description,
    keywords: meta.projects.keywords,
    authors: {
        name: config.personName
    },
    creator: config.personName,
    generator: 'Next.js',
    alternates: {
        canonical: config.appUrl,
    },
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${config.appUrl}/projects`,
        title: meta.projects.title,
        description: meta.projects.description,
        siteName: `Portfolio | ${config.personName}`,
        images: [
            {
                url: `${config.appUrl}/open-graph/og.png`,
                alt: meta.projects.title,
            },
        ],
    },
    icons: {
        icon: "/favicon-dark.ico",
        shortcut: "/favicon-dark.ico",
        apple: "/apple-touch-icon.ico"
    }
}


const Projects = () => <ProjectPage />

export default Projects
