import { BsCheckCircleFill } from 'react-icons/bs'
export default function Pricing() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <h1 className="text-center text-3xl font-semibold capitalize  text-slate-800 lg:text-4xl ">
          Planes & <span className="colored">Precios</span>
        </h1>

        <div className="mt-4 flex items-center justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-[#0071e3]"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-[#0071e3]"></span>
          <span className="inline-block h-1 w-1 rounded-full bg-[#0071e3]"></span>
        </div>

        <p className="mt-4 text-center  font-medium text-gray-500 dark:text-gray-300">
          Elige un plan predefinido o solicita una cotización personalizada!
        </p>
        <div className="mt-[15px] flex items-center justify-center">
          <button className="rounded-md border-[1px] border-[#0071e3] px-3 py-2 text-[#0066cc] transition-colors">
            Cotizar
          </button>
        </div>
        <div className="mt-[20px] grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-lg shadow-gray-100/90 sm:p-8 ">
            <h5 className="0 mb-4 text-xl font-medium text-gray-500">Plan Starter</h5>
            <div className="flex items-baseline text-slate-900 ">
              <span className="text-xl font-semibold">$</span>
              <span className="text-3xl font-extrabold tracking-tight lg:text-5xl">1949</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">/Año</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Dominio .com
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  3 Correos corporativos
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Mantenimiento: {'( 1 mes)'}
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Hosting: {'( 1 Año)'}
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Secciones: 4
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Botón Whatsapp
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Alta en buscadores
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-[#0071e3] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600/90 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Comprar Plan
            </button>
          </div>
          <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-lg shadow-gray-100/90 sm:p-8 ">
            <h5 className="0 mb-4 text-xl font-medium text-gray-500">Plan Negocios</h5>
            <div className="flex items-baseline text-slate-900 ">
              <span className="text-xl font-semibold">$</span>
              <span className="text-3xl font-extrabold tracking-tight">2849</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">/Año</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Dominio .com y alta en buscadores
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Hosting: 1 año
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Mantenimiento: 1 Meses
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  5 Correos corporativos
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Protección antibots
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Secciones: 5
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Botón Whatsapp o Messenger
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-[#0071e3] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600/90 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Comprar plan
            </button>
          </div>
          <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-lg shadow-gray-100/90 sm:p-8 ">
            <h5 className="0 mb-4 text-xl font-medium text-gray-500">Plan Ecommerce</h5>
            <div className="flex items-baseline text-slate-900 ">
              <span className="text-xl font-semibold">$</span>
              <span className="text-3xl font-extrabold tracking-tight">9800</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">/month</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Hosting + Dominio 1 año
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Paypal o Stripe
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3]"
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Capacitación 1 Empleado
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Seguridad Cloudflare
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Diseño Ui
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  8 Correos corporativos
                </span>
              </li>
              <li className="flex space-x-3">
                <BsCheckCircleFill
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-[#0071e3] "
                >
                  <title>Check icon</title>
                </BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Secciones: Segun Servicio.
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-[#0071e3] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600/90 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Comprar plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
