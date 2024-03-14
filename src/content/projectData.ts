import { IProjectType } from '@interfaces/project/project.interface'
import { generateUUID } from '@utils/string.util'

const projectData: IProjectType[] = [
	{
		id: generateUUID(),
		coverImage: '/projects/github-backup.webp',
		description: 'A simple way to backup, synchronize and encrypt repositories for multiple users and organizations',
		githubURL: 'https://github.com/Victor1890/github-backup',
		name: 'Github Backup',
		previewURL: 'https://hub.docker.com/repository/docker/victor1890/github-backup/general',
		tools: ['Node.js', 'Docker', 'Docker Compose', 'Github API'],
	},
	{
		id: generateUUID(),
		coverImage: 'https://raw.githubusercontent.com/Victor1890/chat-frontend-react/master/design/chat.png',
		description:
			'Welcome to Victor Chat React, a lightweight and intuitive chat application built using React and Socket.io. This project provides a solid foundation for a basic real-time chat system, allowing users to communicate seamlessly in a responsive and modern user interface.',
		githubURL: 'https://github.com/Victor1890/chat-frontend-react',
		name: 'Victor Chat React',
		previewURL: 'https://chat-frontend-react-gamma.vercel.app/',
		tools: ['Javascript', 'React', 'Socket.io'],
	},
	{
		id: generateUUID(),
		coverImage: 'https://i.imgur.com/4F8pfCB_d.webp?maxwidth=1520&fidelity=grand',
		description:
			'This is the registration platform for the creation of a Single Citizen Account, which aims to simplify the procurement of Government Services, allowing citizens to access portals, procedures and services that institutions offer digitally, with a single account. The registration process consists of identifying yourself with your ID number, performing a life test and creating your account by selecting an email and password.',
		githubURL: 'https://github.com/ogticrd/cuenta-unica-registry',
		name: 'Single Account Registration Portal - Contributor',
		previewURL: 'https://registro.cuentaunica.gob.do/en/identification',
		tools: ['Next.js', 'TypeScript', 'Javascript', 'Material UI', 'React'],
	},
	{
		id: generateUUID(),
		coverImage: 'https://i.imgur.com/WAJILZK_d.webp?maxwidth=760&fidelity=grand',
		description:
			'This is a backend microservice that provides URL shortening functionality. It allows users to shorten long URLs into shorter, more manageable links. This microservice is built using JavaScript, Node.js, Express.js and utilizes a Database not relationship like MongoDB for storing and retrieving shortened URLs.',
		githubURL: 'https://github.com/Victor1890/url-shortener-node',
		name: 'URL Shortener Microservice',
		previewURL: '',
		tools: ['Javascript', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
	},
	{
		id: generateUUID(),
		coverImage: 'https://i.imgur.com/1G8iJBj_d.webp?maxwidth=1520&fidelity=grand',
		description: 'Single Service Portal - Citizen Portal',
		githubURL: '',
		name: 'Single Service Portal',
		previewURL: 'https://www.gob.do/',
		tools: ['Javascript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
	},
]

export default projectData
