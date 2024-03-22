import React from 'react'
import '../../Pages/Home/Home.css'

const Shop = ({discount , img , title , price , initialPrice , stars}) =>
{
  return (
    <div className=' rounded-sm overflow-hidden flex flex-col gap-2'>
      <div className='shopCart bg-[#ccc] relative py-[20px]'>
        <img src={img}  className=' w-[90%] m-auto h-[250px] mix-blend-multiply' alt="picture" />
        <p className='bg-[#DB4444] absolute top-3 left-3 rounded-md text-white tracking-[1px] p-[2px_10px]'>{discount}%</p>
        <button className='btnCart absolute bottom-0 w-[100%] rounded-md text-white text-[20px] bg-black p-[6px_0] text-center hidden'>Add To Cart</button>
      </div>
      <p className="text-[16px] font-[600]">{title}</p>
      <div className='flex gap-2 items-center '>
        <p className=' text-[#DB4444]'>${price}</p>
        <del className="text-[gray]">${initialPrice}</del>
      </div>
      <div className=' flex gap-2'>
        <div className='flex gap-1 items-center'>
          <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
          <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
          <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
          <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
          <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
        </div>
        <p>({stars})</p>
      </div>
    </div>
  )
}

export default Shop