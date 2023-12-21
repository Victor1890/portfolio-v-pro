import { Utilities } from '@lib/types';
import { BsFillPaletteFill, BsWindows } from 'react-icons/bs';
import { FaGitAlt } from 'react-icons/fa';
import {
  SiFigma,
  SiInsomnia,
  SiPnpm,
  SiPostman,
  SiPrettier,
  SiUbuntu,
  SiVisualstudiocode,
  SiYarn,
} from 'react-icons/si';

const utilities: Utilities = {
  title: 'Utilities',
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
  lastUpdate: 'Nov 13, 2023',
  data: [
    {
      title: 'System',
      data: [
        {
          name: 'Windows',
          description: 'Operating System',
          Icon: BsWindows,
          link: 'https://www.microsoft.com/software-download/windows11',
        },
        {
          name: 'Ubuntu - Linux',
          description: 'Operating System',
          Icon: SiUbuntu,
          link: 'https://ubuntu.com/download/desktop',
        },
      ],
    },

    {
      title: 'Software & Applications',
      data: [
        {
          name: 'VSCode',
          description: 'Primary Code editor',
          Icon: SiVisualstudiocode,
          link: 'https://code.visualstudio.com/download',
        },
        {
          name: 'One Dark Pro',
          description: 'VS Code theme',
          Icon: BsFillPaletteFill,
          link: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
        },
        {
          name: 'Prettier',
          description: 'For Code formatting',
          Icon: SiPrettier,
          link: 'https://prettier.io/',
        },
        {
          name: 'Git',
          description: 'Version Control',
          Icon: FaGitAlt,
          link: 'https://git-scm.com/downloads',
        },
        {
          name: 'Figma',
          description: 'Primary Design tool',
          Icon: SiFigma,
          link: 'https://www.figma.com/downloads/',
        },
        {
          name: 'pnpm',
          description: 'Primary Package Manager',
          Icon: SiPnpm,
          link: 'https://pnpm.io/installation',
        },
        {
          name: 'yarn',
          description: 'Alternative Package Manager',
          Icon: SiYarn,
          link: 'https://classic.yarnpkg.com/lang/en/docs/install/',
        },
        {
          name: 'Insomnia',
          description: 'For testing APIs',
          Icon: SiInsomnia,
          link: 'https://insomnia.rest/download',
        },
        {
          name: 'Postman',
          description: 'API Testing',
          Icon: SiPostman,
          link: 'https://postman.com',
        },
      ],
    },
  ],
};

export default utilities;
