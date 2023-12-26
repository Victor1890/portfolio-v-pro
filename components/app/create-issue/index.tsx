import config from "@config"
import Link from "next/link"

const { github } = config

const CreateAnIssue = () => (
    <div className='grid h-screen w-full place-items-center px-10 sm:px-20 dark:text-gray-200'>
        <p>
            Something went wrong. I know you don't know what's the problem. So Let me know by{' '}
            <Link
                // TODO: Add a link to the issue page
                href={`https://github.com/${github.username}/j471n.in/issues/new`}
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold underline hover:text-blue-500 '
            >
                creating an issue
            </Link>{' '}
            on GitHub.
        </p>
    </div>
)

export default CreateAnIssue