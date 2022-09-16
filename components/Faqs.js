import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

export default function Faqs() {
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-semibold capitalize  text-slate-800 lg:text-4xl ">
          Preguntas <span className="colored">Frecuentes</span>
        </h1>

        <div className="mt-4 flex items-center justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-[#0071e3]"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-[#0071e3]"></span>
          <span className="inline-block h-1 w-1 rounded-full bg-[#0071e3]"></span>
        </div>

        <p className="mt-4 text-center  font-medium text-gray-500 dark:text-gray-300">
          Resuelve tus dudas
        </p>
      </div>
      <div className="mt-[10px] grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Disclosure as="div">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div className="">
                  <div
                    className={
                      open
                        ? 'rounded-lg border border-[#0071e3] transition duration-150'
                        : 'rounded-lg border transition duration-150'
                    }
                  >
                    <div className="flex w-full items-center justify-between p-5">
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        Métodos de Pago
                      </h1>

                      <ChevronRightIcon
                        className={
                          open
                            ? 'h-5 rotate-90 transform text-gray-400 transition duration-200'
                            : 'h-5 text-[#0066cc] transition duration-200'
                        }
                      />
                    </div>
                  </div>
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-150 ease-in"
                enterFrom=" opacity-0"
                enterTo=" opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom=" opacity-100"
                leaveTo=" opacity-0"
              ></Transition>
              <Disclosure.Panel>
                <div className="">
                  <motion.div
                    transition={{ duration: 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-lg border"
                  >
                    <div className=" w-full p-5">
                      <h1 className="font-regular text-gray-500">Métodos de pago aceptados: </h1>
                      <ul className="list-disc">
                        <li className="ml-[1.15rem]">
                          <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                            Paypal
                          </a>
                        </li>
                        <li className="ml-[1.15rem]">
                          <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                            Tarjeta de Credito o Debito
                          </a>
                        </li>
                        <li className="ml-[1.15rem]">
                          <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                            Pagos por OXXO
                          </a>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div className="">
                  <div
                    className={
                      open
                        ? 'rounded-lg border border-[#0071e3] transition duration-150'
                        : 'rounded-lg border transition duration-150'
                    }
                  >
                    <div className="flex w-full items-center justify-between p-5">
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        Soporte Técnico
                      </h1>

                      <ChevronRightIcon
                        className={
                          open
                            ? 'h-5 rotate-90 transform text-gray-400 transition duration-200'
                            : 'h-5 text-[#0066cc] transition duration-150'
                        }
                      />
                    </div>
                  </div>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="">
                  <motion.div
                    transition={{ duration: 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-lg border"
                  >
                    <div className=" w-full p-5">
                      <h1 className="font-regular text-gray-500">
                        1- Si estas teniendo problemas con tu servicio o quieres reportar una falla,
                        haz click{' '}
                        <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                          aquí
                        </a>{' '}
                        para hablar con un técnico.
                      </h1>
                      <br />
                      <h1 className="font-regular text-gray-500">
                        2- Puedes utilizar el chat flotante para hablar con un desarrollador.
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div className="">
                  <div
                    className={
                      open
                        ? 'rounded-lg border border-[#0071e3] transition duration-150'
                        : 'rounded-lg border transition duration-150'
                    }
                  >
                    <div className="flex w-full items-center justify-between p-5">
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        Ya pagué, ¿Que sigue?
                      </h1>

                      <ChevronRightIcon
                        className={
                          open
                            ? 'h-5 rotate-90 transform text-gray-400 transition duration-200'
                            : 'h-5 text-[#0066cc] transition duration-150'
                        }
                      />
                    </div>
                  </div>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="">
                  <motion.div
                    transition={{ duration: 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-lg border"
                  >
                    <div className=" w-full p-5">
                      <h1 className="font-regular text-gray-500">
                        Gracias por confiar en nosotros , es momento de comenzar con el desarrollo
                        de tu sitio web ,envía tu ticket de tu pago{' '}
                        <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                          aquí
                        </a>{' '}
                        para iniciar con tu proyecto.
                      </h1>
                      <br />
                      <span className="text-gray-500">-Con 🧡 Anydev Team. </span>
                    </div>
                  </motion.div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div className="">
                  <div
                    className={
                      open
                        ? 'rounded-lg border border-[#0071e3] transition duration-150'
                        : 'rounded-lg border transition duration-150'
                    }
                  >
                    <div className="flex w-full items-center justify-between p-5">
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        Dominios especiales
                      </h1>

                      <ChevronRightIcon
                        className={
                          open
                            ? 'h-5 rotate-90 transform text-gray-400 transition duration-200'
                            : 'h-5 text-[#0066cc] transition duration-150'
                        }
                      />
                    </div>
                  </div>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="">
                  <motion.div
                    transition={{ duration: 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-lg border"
                  >
                    <div className=" w-full p-5">
                      <h1 className="font-regular text-gray-500">
                        Ofrecemos la posibilidad de adquirir dominios especiales como lo son{' '}
                        <span className="text-indigo-700">.dev</span> ,{' '}
                        <span className="text-indigo-700">.app</span> o{' '}
                        <span className="text-indigo-700">.mx</span> , ten en cuenta que{' '}
                        <a href="wa.me/+525622068949" className="text-[#0066cc] underline">
                          adquirir
                        </a>{' '}
                        uno de estos dominios tiene un costo extra.
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div className="">
                  <div
                    className={
                      open
                        ? 'rounded-lg border border-[#0071e3] transition duration-150'
                        : 'rounded-lg border transition duration-150'
                    }
                  >
                    <div className="flex w-full items-center justify-between p-5">
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        Factura Digital
                      </h1>

                      <ChevronRightIcon
                        className={
                          open
                            ? 'h-5 rotate-90 transform text-gray-400 transition duration-200'
                            : 'h-5 text-[#0066cc] transition duration-150'
                        }
                      />
                    </div>
                  </div>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="">
                  <motion.div
                    transition={{ duration: 0.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-lg border"
                  >
                    <div className=" w-full p-5">
                      <h1 className="font-regular text-gray-500">
                        Gracias por tu confianza , para poder generar una factura, por favor envía
                        tus datos al siguiente correo{' '}
                        <a href="mailto:hola@anydev.info" className="text-[#0066cc] underline">
                          hola@anydev.info
                        </a>{' '}
                        .
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
