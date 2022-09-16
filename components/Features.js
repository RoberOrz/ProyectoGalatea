import { HiOutlineLightningBolt } from 'react-icons/hi'
import { BsChat, BsCalendar4 } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Diseño Gráfico',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: RiComputerLine,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BsCalendar4,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiOutlineLightningBolt,
  },
]

export default function Features() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="absolute h-[6rem] w-[6rem] translate-x-[-1rem] translate-y-[-1rem] rounded-full bg-[#0071e3] blur-[3rem]"></div>
        <div className="absolute h-[6rem] w-[6rem] translate-x-[3rem] translate-y-[4rem] rounded-full bg-[#b4a0ff] blur-xl"></div>
        <div className="absolute right-9 h-[6rem] w-[6rem] translate-y-[7rem] rounded-full bg-[#ffa723bc] blur-xl"></div>
        <div className="rounded-md bg-slate-100/50 py-12 backdrop-blur-md dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h5 className="colored text-lg font-semibold">Características</h5>
              <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Servicios para ti
              </h2>
            </div>

            <div className="mt-10">
              <div className="grid gap-5 md:grid-cols-3 md:gap-10">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative flex flex-col rounded-md p-5 shadow-md shadow-slate-200 dark:border-[1px] dark:border-[#0071e3] dark:bg-transparent"
                  >
                    <div className="">
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#B1D0D4] dark:bg-[#0071e300]">
                        <feature.icon className="text-xl text-white" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">
                        {feature.name}
                      </p>
                    </div>
                    <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
