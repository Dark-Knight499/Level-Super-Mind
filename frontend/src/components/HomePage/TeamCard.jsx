import React from 'react'
import { Linkedin, Github } from 'lucide-react'
const people = [
  {
    name: 'Harsh Jain',
    role: 'Backend & AI Developer',
    imageUrl:
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d3b6c444-4600-4c30-a24d-860c269e7f6e/width=1200/d3b6c444-4600-4c30-a24d-860c269e7f6e.jpeg',
    git: 'https://github.com/Dark-Knight499/',
    linkedIn: 'https://www.linkedin.com/in/harsh-jain-82243128b/'
  },
  {
    name: 'Ganesh Mishra',
    role: 'Fullstack Developer',
    imageUrl:
      'https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg',
    git: 'https://github.com/GaneshMishra-lab',
    linkedIn: 'https://www.linkedin.com/in/ganesh-mishra-1bb89b290/'
  },
  {
    name: 'Gaurav Dubey',
    role: 'Fullstack Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuK2yF9SqI7kmpz-lEct85j_mNWw68SjkMQ&s',
    git: 'https://github.com/CodeWithDubeyji',
    linkedIn: 'https://www.linkedin.com/in/gaurav-dubey-345a33271/'
  },
  {
    name: 'Prasham Karkera',
    role: 'Backend Developer',
    imageUrl:
      'https://rukminim2.flixcart.com/image/850/1000/kxtaxzk0/poster/3/6/c/medium-anime-dr-stone-senku-ishigami-matte-finish-poster-original-imaga6jqxw4bgaep.jpeg?q=90&crop=false',
      git:'https://github.com/Prasham-Karkera',
      linkedIn:'https://www.linkedin.com/in/prasham-karkera-3a6820290/'
  }
]

const TeamCard = person => {
  return (
    <div className=' py-24 sm:py-32 lg:ml-36'>
      <div className='mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-xl'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Meet <span className='text-[#4F46E5]'>3beans4coffee</span>
          </h2>
          <p className='mt-6 text-lg/8 text-gray-400 leading-relaxed'>
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <ul
          role='list'
          className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
        >
          {people.map(person => (
            <li key={person.name}>
              <div className='flex items-center gap-x-6'>
                <img
                  alt=''
                  src={person.imageUrl}
                  className='size-16 rounded-full'
                />
                <div>
                  <h3 className='text-base/7 font-semibold tracking-tight text-white'>
                    {person.name}
                  </h3>
                  <p className='text-sm/6 font-semibold text-[#4F46E5]'>
                    {person.role}
                  </p>
                  <div className='flex gap-x-2'>
                    <a href={person.linkedIn} className='text-[#4F46E5]' target='_blank'>
                      <Linkedin size={20} />
                    </a>
                    <a href={person.git} className='text-[#4F46E5]' target='_blank'>
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamCard
