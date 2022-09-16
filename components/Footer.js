import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mx-3 mt-[10px] rounded-lg border-[1px] border-gray-200 bg-white  py-4 text-center dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{' '}
        <a href="https://anydev.dev" className="hover:underline">
          AnyDev™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Nosotros
          </a>
        </li>
        <li>
          <Link href="/Terminos_y_Condiciones">
            <a className="mr-4 hover:underline md:mr-6">Terminos y Condiciones</a>
          </Link>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Cookies
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </li>
      </ul>
    </footer>
  )
}
