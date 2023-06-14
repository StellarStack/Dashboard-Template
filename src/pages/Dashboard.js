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
import camera from "/public/Assets/camera.png"
import settingicon from "/public/Assets/setting-icon.png"
import basicicon from "/public/Assets/basic-icon.png"
import arrowdrop from "/public/Assets/arrow-drop.png"
import arrowdropright from "/public/Assets/arrow-drop-right.png"
export default function Dashboard() {
  return (
    <div className=''>

      <div className='flex max-w-[100%] '>
        <div className='bg-[#232528] max-w-[5%] px-2 '>
          <Image className='w-[30px] h-[40px] ml-4 pt-4' src={triangle} />
          <div className='flex flex-col  items-center gap-5 pt-16'>
            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[14px]' src={homepic} />
              <p className='text-[#B8B8B8] text-[10px]'>Home</p>
            </div>

            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[14px]' src={chat} />
              <p className='text-[#B8B8B8] text-[10px]'>Chat</p>
            </div>

            <div className='flex flex-col items-center p-2  rounded-xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400'>
              <Image className='w-[14px] h-[14px]' src={create} />
              <p className='text-[white] text-[10px]'>Create </p>
            </div>

            <div className='flex flex-col items-center'>
              <Image className='w-[16px] h-[16px]' src={community} />
              <p className='text-[#B8B8B8] text-[10px]'>Community</p>
            </div>

            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[16px]' src={collections} />
              <p className='text-[#B8B8B8] text-[10px]'>Collections</p>
            </div>

            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[14px]' src={bounty} />
              <p className='text-[#B8B8B8] text-[10px]'>Bounty</p>
            </div>

            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[14px]' src={learn} />
              <p className='text-[#B8B8B8] text-[10px]'>Learn</p>
            </div>


            <div className='flex flex-col items-center'>
              <Image className='w-[14px] h-[14px]' src={flux} />
              <p className='text-[#B8B8B8] text-[10px]'>Flux</p>
            </div>

          </div>

          <div className='pt-24'>
            <Image src={arrowdrop} />
            <Image className='relative bottom-12 left-1' src={arrowdropright} />
          </div>

        </div>


        {/*this is second line code*/}
        <div className='bg-black flex flex-col gap-2  px-2 '>

          <div className='flex py-4 gap-2'>
            <Image className='w-[40px] h-[40px] p-[10px] bg-[#9F9F9F] rounded' src={camera} />
            <div>
              <p className='text-[12px] font-semibold text-[white] max-w-[150px]'>Language Translation Assistant</p>
              <div className='flex items-center gap-1 mt-1 py-[2px] bg-[#48494b] rounded-2xl max-w-[65px] justify-center'>
                <Image className='w-[10px] h-[10px]' src={chat} />
                <p className='text-[#B8B8B8] text-[8px] '>Chat bot</p>
              </div>
            </div>
          </div>

          <div className='flex gap-2 items-center p-2 max-w-[180px] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 rounded-2xl'>
            <Image className='w-[22px] h-[22px]' src={settingicon} />
            <p className='text-[11px] font-semibold text-[white]'>Prompt</p>
          </div>

          <div className='flex gap-2 items-center p-2 '>
            <Image className='w-[22px] h-[22px]' src={basicicon} />
            <p className='text-[11px] font-semibold text-[#B8B8B8]'>Basics</p>
          </div>

        </div>





      </div>

    </div>
  )
}
