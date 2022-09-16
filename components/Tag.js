import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-1 mr-3 rounded-md bg-primary-50 p-1 text-xs font-medium uppercase text-primary-500 dark:bg-blue-500 dark:text-white">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
