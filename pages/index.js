import Link from '@/components/Link'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Faqs from '@/components/Faqs'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Features />
      <Faqs />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Ultimos Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ver los ultimos blogs sobré tecnología y programación
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li
                key={slug}
                className=" rounded-lg py-4 shadow-lg transition duration-150 hover:bg-gray-100/50 hover:shadow-xl dark:hover:bg-gray-900"
              >
                <article className="space-y-2 p-5">
                  <div className="space-y-3 xl:col-span-3">
                    <div className="relative">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        <Image
                          src={images}
                          alt={title}
                          width={1920}
                          height={1080}
                          className="rounded-md transition duration-150 hover:brightness-50"
                        />
                      </Link>
                    </div>
                    <div>
                      <time
                        className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                        dateTime={date}
                      >
                        {formatDate(date)}
                      </time>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
