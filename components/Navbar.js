import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import ThemeSwitch from './ThemeSwitch'

const soluciones = [
  {
    name: 'Analiticas',
    description: 'Obtén analiticas de forma mensual.',
    href: '/Analiticas',
    icon: ChartBarIcon,
  },
  {
    name: 'Seo',
    description: 'Posicionamiento en Google.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Seguridad',
    description: 'Analisis de riesgos y Cloudflare.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integraciones',
    description: 'Te conectamos a cualquier API o Servicio.',
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automatizaciones',
    description: 'Automatiza tu negocio con sistemas dedicados',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  {
    name: 'Solicitar Demo',
    href: 'https://wa.me/+525622068949',
    icon: PlayIcon,
  },
  { name: 'Contactar', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Ayuda',
    description: 'Soporte técnico para nuestros clientes.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guías',
    description: 'Guías de ayuda para nuestros clientes.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Tutoriales',
    description: 'Tutoriales para la comunidad.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Legal',
    description: 'Conoce como funciona Anydev Solutions.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="navbar fixed top-[-1px] z-20 mt-0 w-full dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 ">
        <div className="flex items-center justify-between py-5 md:justify-start  md:space-x-10 md:py-2">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-md font-semibold">
                Any<span className="text-blueIosText">Dev</span>
              </a>
            </Link>
            <span className=" absolute ml-1  translate-x-[3.5rem] translate-y-[-.4rem] rounded-md bg-[#0071e3] p-1 text-[.45rem] font-bold text-white">
              BETA
            </span>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-500 shadow-xl shadow-gray-200/50 hover:bg-gray-50 hover:text-gray-500 focus:outline-none dark:bg-transparent dark:text-white dark:shadow-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span className="dark:font-regular font-medium text-gray-800 dark:text-white">
                      Soluciones
                    </span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-900" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg shadow-black/5 ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {soluciones.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-[#0066cc]"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href}>
                                <a className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/blog">
              <a className="dark:font-regular font-medium text-gray-800 dark:text-white ">Blog</a>
            </Link>
            <Link href="/about">
              <a className="dark:font-regular font-medium text-gray-800 dark:text-white">
                Nosotros
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className="dark:font-regular font-medium text-gray-800 dark:text-white">
                      Más
                    </span>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  left-1/2 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg shadow-black/5 ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-[#0066cc]"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <Link href={post.href}>
                                    <a className="font-medium text-gray-900 hover:text-gray-700">
                                      {post.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="#">
                              <a className="font-medium text-[#0066cc] hover:text-blue-500">
                                {' '}
                                View all posts <span aria-hidden="true">&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-[.05s]  ease-in"
        enterFrom="opacity-0 "
        enterTo="opacity-1 "
        leave="duration-[.05s] ease-in"
        leaveFrom="opacity-1 "
        leaveTo=" opacity-0"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50  rounded-lg bg-white shadow-lg">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a className="text-md font-semibold">Anydev</a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {soluciones.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-[#0066cc]"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="#">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">Precios</a>
                </Link>

                <Link href="/about">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Nosotros
                  </a>
                </Link>
                {resources.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/">
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#0071e3] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#0465c7]">
                    Sign up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <Link href="/Login">
                    <a className="flex w-full items-center justify-center rounded-md border border-[#0071e3] bg-transparent px-4 py-2 text-base font-medium text-[#0066cc] shadow-sm hover:bg-gray-50">
                      Login
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
