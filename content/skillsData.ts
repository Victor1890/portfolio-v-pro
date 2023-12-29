import { SkillType } from '@interfaces/skill/skill.interface'
import {
	SiBootstrap,
	SiCss3,
	SiDocker,
	SiFigma,
	SiFirebase,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMarkdown,
	SiMaterialui,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiRedis,
	SiRedux,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiSocketdotio,
} from 'react-icons/si'

const skills: SkillType[] = [
	{
		name: 'HTML',
		Icon: SiHtml5,
	},
	{
		name: 'CSS',
		Icon: SiCss3,
	},
	{
		name: 'Javascript',
		Icon: SiJavascript,
	},
	{
		name: 'Typescript',
		Icon: SiTypescript,
	},
	{
		name: 'Node.js',
		Icon: SiNodedotjs,
	},
	{
		name: 'Next.js',
		Icon: SiNextdotjs,
	},
	{
		name: 'Redux',
		Icon: SiRedux,
	},
	{
		name: 'Socket IO',
		Icon: SiSocketdotio,
	},
	{
		name: 'Tailwind CSS',
		Icon: SiTailwindcss,
	},
	{
		name: 'Bootstrap',
		Icon: SiBootstrap,
	},
	{
		name: 'Material UI (MUI)',
		Icon: SiMaterialui,
	},
	{
		name: 'Docker and Composer',
		Icon: SiDocker,
	},
	{
		name: 'MySQL',
		Icon: SiMysql,
	},
	{
		name: 'PostgresSQL',
		Icon: SiPostgresql,
	},
	{
		name: 'MongoDB',
		Icon: SiMongodb,
	},
	{
		name: 'Redis',
		Icon: SiRedis,
	},
	{
		name: 'Firebase',
		Icon: SiFirebase,
	},
	{
		name: 'Supabase',
		Icon: SiSupabase,
	},
	{
		name: 'Markdown',
		Icon: SiMarkdown,
	},
	{
		name: 'Git',
		Icon: SiGit,
	},
	{
		name: 'Figma',
		Icon: SiFigma,
	},
]

export default skills
