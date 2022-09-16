import Link from '@/components/Link'
import Typewriter from 'typewriter-effect'
import { FaFacebook, FaBehance, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ShapeLeft from 'public/static/images/shape-left.png'
import ShapeRight from 'public/static/images/shape-right.png'
export default function Hero() {
  return (
    <>
      <div className="hero flex items-center justify-center overflow-hidden ">
        <div className="z-1 absolute top-0 h-full w-full overflow-hidden">
          <div className="blured2 rounded-full bg-cyan-500"></div>
        </div>
        <div className="z-10 mx-4 overflow-hidden rounded-lg p-5 lg:p-10 ">
          <div className="container mx-auto grid text-center lg:grid-cols-2 lg:px-6 lg:py-5">
            <motion.div
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-lg items-center justify-center"
            >
              <div className="">
                <h1 className=" text-6xl font-bold text-slate-800">
                  Tu Sitio Web Con La Mejor <span className="colored">Tecnología</span>
                </h1>
                <p className="font-regular mt-6 text-gray-700">
                  Sitios y aplicaciones web, <span className="text-[#1d1d1f]">rapidos </span>y
                  eficientes para comenzar tu negocio..
                </p>
                <ul className="mt-6 flex items-center justify-center gap-5 lg:justify-start">
                  <li className="rounded-full bg-slate-50 p-2">
                    <a
                      href="https://www.facebook.com/AnyDev.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-xl text-slate-600" />
                    </a>
                  </li>
                  <li className="rounded-full bg-slate-50 p-2">
                    <a
                      href="https://www.facebook.com/AnyDev.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehance className="text-xl text-slate-600" />
                    </a>
                  </li>
                  <li className="rounded-full bg-slate-50 p-2">
                    <a
                      href="https://www.facebook.com/AnyDev.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-xl text-slate-600" />
                    </a>
                  </li>
                  <li className="rounded-full bg-slate-50 p-2">
                    <a
                      href="https://www.facebook.com/AnyDev.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-xl text-slate-600" />
                    </a>
                  </li>
                </ul>
                <div className="p-5">
                  <Link
                    className=" font-regular white text-md mt-5  rounded-lg bg-[#0071e3] px-2 py-2 text-center capitalize leading-5 text-white transition duration-150 hover:-translate-y-[.5rem] focus:outline-none lg:mx-0 lg:w-auto"
                    href="/direct"
                  >
                    Obtener una demo
                  </Link>
                </div>
                <p className="mt-3 mb-[10px] text-sm text-gray-100 ">
                  No requiere tarjeta de crédito
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
