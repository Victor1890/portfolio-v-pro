import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import {
	SiCss3,
	SiPython,
	SiGnubash,
	SiHtml5,
	SiReact,
	SiMarkdown,
	SiNextdotjs,
	SiVercel,
	SiTypescript,
} from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'
import { IoLogoJavascript } from 'react-icons/io5'
import { AiOutlineFileText, AiOutlineFolderOpen } from 'react-icons/ai'

type Props = {
	title?: string
	lang: string
}

export default function CodeTitle({ title, lang }: Props) {
	let Icon
	switch (lang) {
		case 'html':
			Icon = SiHtml5
			break
		case 'css':
			Icon = SiCss3
			break
		case 'js':
			Icon = IoLogoJavascript
			break
		case 'bash':
			Icon = SiGnubash
			break
		case 'py':
			Icon = SiPython
			break
		case 'json':
			Icon = VscJson
			break
		case 'jsx':
			Icon = SiReact
			break
		case 'text':
			Icon = AiOutlineFileText
			break
		case 'md':
			Icon = SiMarkdown
			break
		case 'next':
			Icon = SiNextdotjs
			break
		case 'directory':
			Icon = AiOutlineFolderOpen
			break
		case 'vercel':
			Icon = SiVercel
			break
		case 'ts' || 'tsx':
			Icon = SiTypescript
			break
		default:
			Icon = BsFileEarmarkCodeFill
			break
	}
	return (
		<div className='relative !z-10'>
			<div className='xs:overflow-auto !mt-4 flex items-center  justify-between overflow-x-scroll rounded-tl-md  rounded-tr-md border border-black bg-white p-3 font-mono text-darkSecondary dark:border-gray-200/60 dark:bg-darkSecondary   dark:text-gray-200  '>
				<div className='flex items-center gap-2'>
					<Icon className='flex h-4 w-4 items-center' />
					<p className='!my-0 text-sm font-[500]'>{title || lang}</p>
				</div>
			</div>
		</div>
	)
}
