import { PageMeta } from '@interfaces/common/common.interface'

export const DESCRIPTION =
	'Experienced FullStack Developer specializing in cutting-edge mobile and web development technologies for businesses and startups. Over 4 years of hands-on experience in the IT industry.';

const KEYWORDS = [
	'victorrosario',
	'victor rosario',
	'victorjesusrosariovasquez',
	'vjrv',
	'victor jesus rosario vasquez',
	'victor jesus',
	'victor vasquez',
	'victor 1890',
	'victor1890',
	'development',
	'developer',
	'backend',
	'frontend',
	'fullstack',
	'Full Stack web development',
	'Full Stack application development',
	'Full Stack software development',
	'Full Stack development framework',
	'Full Stack development tools',
	'Full Stack development portfolio',
	'Full Stack development best practices',
	'Full Stack development services',
	'Frontend development',
	'Backend development',
	'Web development',
	'Mobile development',
	'Cross-platform development',
	'Responsive design',
	'Server-side scripting',
	'Database management',
	'API design and development',
	'Testing and debugging',
	'Continuous integration and delivery',
	'Version control',
	'Agile development methodologies',
	'Cloud computing',
	'DevOps',
	'Scalability and performance optimization',
	'Technologist',
	'Technological Institute of the Americas (ITLA)',
	'FullStack Developer',
	'JavaScript',
	'TypeScript',
	'Node',
	'Node.js',
	'PL / SQL',
	'API REST',
	'Blockchain technologies',
	'Redis',
	'Docker',
	'WebSocket',
	'Socket.io',
	'portfolio victor',
	'portfolio victor1890',
	'victor blog',
	'victor1890 blog',
]

export const metadata: PageMeta = {
	home: {
		title: '',
		description: DESCRIPTION,
		image: 'https://i.imgur.com/nCVESbL.png',
		keywords: KEYWORDS.join(', '),
	},
	stats: {
		title: 'Statistics',
		description: DESCRIPTION,
		image: 'https://imgur.com/9scFfW5.png',
		keywords: ['stats', 'Statistics'].concat(KEYWORDS).join(', '),
	},
	utilities: {
		title: 'Utilities',
		description: DESCRIPTION,
		image: 'https://imgur.com/MpfymCd.png',
		keywords: ['Utilities', 'what i use?', 'utils', 'setup', 'uses'].concat(KEYWORDS).join(', '),
	},
	blogs: {
		title: 'Blogs',
		description: DESCRIPTION,
		image: 'https://imgur.com/nbNLLZk.png',
		keywords: ['blogs', 'blog', 'webdev', 'react'].concat(KEYWORDS).join(', '),
	},
	certificates: {
		title: 'Certificates',
		description: DESCRIPTION,
		image: 'https://imgur.com/J0q1OdT.png',
		keywords: ['Certificates', 'verified'].concat(KEYWORDS).join(', '),
	},
	projects: {
		title: 'Projects',
		description: DESCRIPTION,
		image: 'https://imgur.com/XJqiuNK.png',
		keywords: ['projects', 'work', 'side project'].concat(KEYWORDS).join(', '),
	},
	about: {
		title: 'About',
		description: DESCRIPTION,
		image: 'https://imgur.com/b0HRaPv.png',
		keywords: ['about', 'about me', 'victor rosario'].concat(KEYWORDS).join(', '),
	},
}
