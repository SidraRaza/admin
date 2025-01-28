import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero2 = () => {
  return (
    <>
    <div className='w-[1440px] h-[770px] bg-[#FAFAFA] hidden md:block'>
        <div className='w-[1050px] h-[770px] py-[60px] mx-auto'>
            <div className='text-center text-[24px] leading-[32px] font-bold text-[#252B42]'>
           <h1 className='text-[24px] leading-[62px]'> EDITOR’S PICK</h1>
           <h1 className='text-[14px] leading-[20px] text-[#737373]'>Problems trying to resolve the conflict between </h1>
            </div>
            <div className='flex justify-center items-center mx-auto gap-[30px] w-[1050px] h-[500px] mt-[80px]'>
            <div className="relative flex justify-center items-center">
  {/* Image */}
  <Image
    src="/h23.svg"
    alt="img"
    width={510}
    height={500}
    
  />

  {/* Text on Image */}
  <Link href="#"> <div className="absolute top-[426px] w-[170px] h-[48px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
      MEN
    </h1>
  </div>
  </Link>
</div>
<div className="relative flex justify-center items-center">
  {/* Image */}
  <Image
    src="/h24.svg"
    alt="img"
    width={239}
    height={500}
    className='h-[500px]'
  />

  {/* Text on Image */}
  <Link href="#"> <div className="absolute top-[426px] w-[136px] h-[48px] left-[100px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
    WOMEN
    </h1>
  </div>
  </Link>
</div>

<div className='flex justify-center items-center flex-col w-[240px] h-[500px] gap-[16px]'>
<div className="relative flex justify-center items-center ">
  {/* Image */}
  <Image
    src="/h25.svg"
    alt="img"
    width={240}
    height={242}
    className='h-[242px]'
  />

  {/* Text on Image */}
  <Link href="#"> <div className="absolute top-[190px] w-[170px] h-[48px] left-[100px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
    ACCESSORIES
    </h1>
  </div>
  </Link>
</div> 
<div className="relative flex justify-center items-center ">
  {/* Image */}
  <Image
    src="/h26.svg"
    alt="img"
    width={240}
    height={242}
    className='h-[242px]'
  />

  {/* Text on Image */}
  <Link href="#"> <div className="absolute top-[190px] w-[120px] h-[48px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
    KIDS
    </h1>
  </div>
  </Link>
</div>   
</div>

            </div>
        </div>
    </div>
   
    <div className='w-[414px] h-[1850px] bg-[#FAFAFA] md:hidden block'>
        <div className='w-[333px] h-[1850px] mx-auto'>
<div className='w-[333px] h-[82px] text-center py-[100px]'>
    <h1 className='text-[24px] leading-[54px] font-bold text-[#252B42]'>EDITOR’S PICK</h1>
    <h1 className='text-[14px] leading-[20px] w-[196px] mx-auto text-[#737373]'>Problems trying to resolve 
    the conflict between </h1>
</div>
<div className='w-[325px] h-[500px]'>
  <div className='relative'>
            <Image src={'/h27.svg'} alt="img" width={324} height={500} className='w-full h-[500px] mt-6'/>
             <Link href="#"> <div className="absolute top-[426px] w-[170px] h-[48px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
    MEN
    </h1>
  </div>
  </Link>
  </div>
        </div>
        <div className='w-[325px] h-[500px]'>
  <div className='relative'>
            <Image src={'/h28.svg'} alt="img" width={324} height={500} className='w-full h-[500px] mt-6'/>
             <Link href="#"> <div className="absolute top-[426px] w-[136px] h-[48px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
   WOMEN
    </h1>
  </div>
  </Link>
  </div>
        </div>
           <div className='w-[325px] h-[242px]'>
  <div className='relative'>
            <Image src={'/h29.svg'} alt="img" width={324} height={242} className='w-full h-[242px] mt-6'/>
             <Link href="#"> <div className="absolute top-[180px] w-[170px] h-[48px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
  ACCESSORIES
    </h1>
  </div>
  </Link>
  </div>
        </div>
                <div className='w-[325px] h-[242px]'>
  <div className='relative'>
            <Image src={'/h30.svg'} alt="img" width={324} height={242} className='w-full h-[242px] mt-6'/>
             <Link href="#"> <div className="absolute top-[180px] w-[120px] h-[48px] left-[100px] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md">
    <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42] text-center items-center justify-center flex mt-[5px]">
 KIDS
    </h1>
  </div>
  </Link>
  </div>
        </div>
       
        </div>
      
       
    </div>
 
    </>
  )
}

export default Hero2