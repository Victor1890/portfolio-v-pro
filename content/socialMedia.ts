import { ISocialPlatform } from '@interfaces/spotify/spotify.interface'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const socialMedia: ISocialPlatform[] = [
	{
		title: 'LinkedIn',
		Icon: BsLinkedin,
		url: 'https://www.linkedin.com/in/victor-j-rosario-v/?locale=en_US',
	},
	{
		title: 'Github',
		Icon: BsGithub,
		url: 'https://github.com/Victor1890',
	},
	{
		title: 'Dev.to',
		Icon: FaDev,
		url: 'https://dev.to/victor1890',
	},
	{
		title: 'Mail',
		Icon: HiMail,
		url: 'mailto:victorrosariodeveloper@gmail.com',
	},
]

export default socialMedia
