import React, { Component } from 'react'
import img1 from "../../assets/proccess1.png"
import img2 from "../../assets/proccess2.png"
import img3 from "../../assets/proccess3.png"

export default class Proccess extends Component {
  render() {
    return (
      <section className='bg-[#14110E]'>
        <div className="container">
            <div className='grid grid-cols-3 mx-auto'>
                <div>
                    <div className='mb-6'>
                        <p className='text-[20px] font-medium text-white'><span className='text-[#C99E71] text-[20px] font-medium'>01</span> Best Coffee Flavour</p>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={img1} alt="" className='hover:scale-110 duration-500'/>
                    </div>
                </div>
                <div>
                    <div className='mb-6'>
                        <p className='text-[20px] font-medium text-white'><span className='text-[#C99E71] text-[20px] font-medium'>02</span> Place to get lost</p>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={img2} alt="" className='hover:scale-110 duration-500'/>
                    </div>
                </div>
                <div>
                    <div className='mb-6'>
                        <p className='text-[20px] font-medium text-white'><span className='text-[#C99E71] text-[20px] font-medium'>03</span> Proper roesting</p>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={img3} alt="" className='hover:scale-110 duration-500'/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
