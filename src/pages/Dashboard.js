import React from 'react'
import Image from 'next/image'
import triangle from "/public/Assets/triangle.png"
import homepic from "/public/Assets/home-pic.png"

export default function Dashboard() {
  return (
    <div className=''>
    <div className='bg-black'>
       <Image className='w-[35px] h-[35px]' src={triangle}/>
       <div>
       <Image className='w-[18px] h-[18px]'  src={homepic}/>
       </div>
       
    </div>

    </div>
  )
}
