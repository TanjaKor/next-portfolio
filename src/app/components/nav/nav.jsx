"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Koti', href: '#', current: true },
  { name: 'Projektit', href: '#', current: false },
  { name: 'Minä', href: '#', current: false },
  { name: 'Ota yhteyttä', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () =>{
    if (window.scrollY >=20){
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', scrollHeader)

    return ()=> {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])


  return (
    <div className=" fixed w-[100%]">
      <div className='header flex w-[80%] justify-between'>
        <div className='menu'>
          <nav>
            <ul className='flex gap-[20px]'>
              <li>
                <Link href=''>Koti</Link>
              </li>
              <li>
                <Link href=''>Projektit</Link>
              </li>
              <li>
                <Link href=''>Minä</Link>
              </li>
              <li>
                <Link href=''>Ota yhteyttä</Link>
              </li>
            </ul>
          </nav>
        </div> 
      </div>
    </div>
  )
}
