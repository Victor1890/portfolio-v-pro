import { MetadataRoute } from 'next'
import config from '@config'
import { USER_AGENT } from '@constants/robot.constant'

const { appUrl } = config

export default function robots(): MetadataRoute.Robots {
	const rules = USER_AGENT.map((agent) => ({
		userAgent: agent,
		allow: '/',
	}))

	return {
		rules: rules,
		sitemap: `${appUrl}/sitemap.xml`,
		host: appUrl,
	}
}
