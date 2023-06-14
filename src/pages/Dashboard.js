import React from 'react'
import Image from 'next/image'
import triangle from "/public/Assets/triangle.png"
import homepic from "/public/Assets/home-pic.png"
import chat from "/public/Assets/chat.png"
import create from "/public/Assets/create.png"
import community from "/public/Assets/community.png"
import collections from "/public/Assets/collection.png"
import bounty from "/public/Assets/bounty.png"
import learn from "/public/Assets/learn.svg"
import flux from "/public/Assets/flux.png"

export default function Dashboard() {
  return (
    <div className=''>
    <div className='bg-black max-w-[5%] h-[100vh]'>
       <Image className='w-[30px] h-[40px] ml-4 pt-4'  src={triangle}/>
       <div className='flex flex-col  items-center gap-5 pt-16'>
       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[18px]'  src={homepic}/>
       <p className='text-[#B8B8B8] text-[10px]'>Home</p>
       </div>

       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[18px]'  src={chat}/>
       <p className='text-[#B8B8B8] text-[10px]'>Chat</p>
       </div>

       <div className='flex flex-col items-center p-2 max-w-[70%] rounded-xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400'>
       <Image className='w-[18px] h-[18px]'  src={create}/>
       <p className='text-[white] text-[10px]'>Create </p>
       </div>

       <div className='flex flex-col items-center'>
       <Image className='w-[20px] h-[18px]'  src={community}/>
       <p className='text-[#B8B8B8] text-[10px]'>Community</p>
       </div>

       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[20px]'  src={collections}/>
       <p className='text-[#B8B8B8] text-[10px]'>Collections</p>
       </div>

       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[18px]'  src={bounty}/>
       <p className='text-[#B8B8B8] text-[10px]'>Bounty</p>
       </div>

       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[18px]'  src={learn}/>
       <p className='text-[#B8B8B8] text-[10px]'>Learn</p>
       </div>

       
       <div className='flex flex-col items-center'>
       <Image className='w-[18px] h-[18px]'  src={flux}/>
       <p className='text-[#B8B8B8] text-[10px]'>Flux</p>
       </div>
       
    </div>
       </div>

    </div>
  )
}
