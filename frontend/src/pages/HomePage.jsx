import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Zap, BotMessageSquare } from 'lucide-react'
import FeatureCard from '../components/HomePage/FeatureCard'
import TeamCard from '../components/HomePage/TeamCard'
import Chatbot from './Chatbot'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const navigation = [
  { name: 'Features', href: '#feature' },
  { name: 'Team', href: '#about' }
]

const features = [
  {
    type: 'deploy',
    title: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.'
  },
  {
    type: 'ssl',
    title: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.'
  },
  {
    type: 'queues',
    title: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.'
  },
  {
    type: 'security',
    title: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.'
  }
]

export default function HomePage () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatbot, setChatbot] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true) // Tooltip visibility state

  const showchatbot = () => {
    if (!chatbot) {
      setChatbot(true)
    } else {
      setChatbot(false)
    }
  }

  useEffect(() => {
    // Automatically hide the tooltip after 1 second
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 2000) // 1000ms = 1 second

    return () => clearTimeout(timer) // Cleanup the timer when the component unmounts
  }, [])

  return (
    <div>
      <div className='absolute inset-0 bg-[#111826]'>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav
            aria-label='Global'
            className='flex items-center justify-between p-6 lg:px-8'
          >
            <div className='flex lg:flex-1'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  alt=''
                  src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                  className='h-8 w-auto'
                />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(true)}
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon aria-hidden='true' className='size-6' />
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='relative text-sm/6 font-semibold text-white pb-1 before:absolute before:h-[2px] before:w-0 before:bg-gradient-to-br before:from-[#ff80b5] before:to-[#9089fc] before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 hover:before:translate-x-0'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Link
                to='/login'
                className='relative text-sm/6 font-semibold text-white pb-1 before:absolute before:h-[2px] before:w-0 before:bg-gradient-to-br before:from-[#ff80b5] before:to-[#9089fc] before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 hover:before:translate-x-0'
              >
                Log in <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className='lg:hidden'
          >
            <div className='fixed inset-0 z-50' />
            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#111826] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  <img
                    alt=''
                    src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                    className='h-8 w-auto'
                  />
                </a>
                <button
                  type='button'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-m-2.5 rounded-md p-2.5 text-white'
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon aria-hidden='true' className='size-6' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#111826]/5'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='py-6'>
                    <Link
                      to='/login'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-[#111826]/5'
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className='relative isolate px-6 pt-14 lg:px-8 bg-[#111826]'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm/6 bg-blue-900/[0.3] select-none flex gap-1 items-center text-indigo-400'>
                <Zap size={16} />
                <p className='font-semibold'>Powered by AI</p>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl'>
                Data to enrich your online business
              </h1>
              <p className='mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='/signup'
                  className='relative rounded-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm border-[2px] border-gray-300 before:absolute before:h-10 before:w-0 before:bg-gradient-to-br before:from-[#ff80b5] before:to-[#9089fc] before:left-0 before:top-0 before:rounded-full hover:before:w-full overflow-hidden before:transition-all before:duration-300'
                >
                  <span className='relative z-10'>Get started</span>
                </a>
              </div>
            </div>
          </div>
          <div
            id='feature'
            className='flex flex-col items-center justify-center text-white bg-[#111826]'
          >
            <p className='text-indigo-500 font-medium'>Features</p>
            <h1 className='mt-3 text-4xl font-bold text-center max-w-2xl'>
              Everything you need to deploy your app
            </h1>
            <p className='mt-6 text-gray-400 text-center max-w-2xl'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          <div id='about'>
            <TeamCard />
          </div>
          <footer className='bg-transparent text-white w-full text-center'>
            © 2024 Your Company, Inc. All rights reserved.
          </footer>
        </div>
      </div>
      {/* 
      <button
        onClick={showchatbot}
        className='fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md focus:outline-none'
      >
        chat
      </button> */}
      <Tippy
        content={
          <div className='text-base text-white px-3 py-2 shadow-lg'>
            Meet your AI Assistant! Click the button to start chatting.
          </div>
        }
        visible={showTooltip}
        placement='top-start'
      >
        <BotMessageSquare
          onClick={showchatbot}
          className='fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-500 p-2 text-white rounded-md focus:outline-none flex items-center justify-center'
          style={{ width: 48, height: 48 }} // Add size if padding is necessary
        />
      </Tippy>
      {chatbot && (
        <div className='fixed bottom-20 right-4 z-50 bg-white shadow-sm shadow-slate-400 rounded-t-md rounded-r-md flex flex-col items-center justify-center'>
          <div className='absolute -bottom-2 right-6 transform translate-x-1/2 w-4 h-4 bg-white rotate-45'></div>
          <h1 className='text-[#111826] font-serif p-2 font-semibold'>
            <span className='text-indigo-600 font-semibold'>GanuAI</span> is
            here to help you!
          </h1>
          <div className='w-80 lg:w-96 h-2/3 bg-white rounded-b-md rounded-l-md overflow-scroll scrollbar-hide px-2'>
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  )
}
