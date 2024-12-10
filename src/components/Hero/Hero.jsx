import React, { Component } from 'react'
import { BsPlayCircle } from 'react-icons/bs';

export default class Hero extends Component {
  render() {
    return (
        <section className="relative bg-[#14110E]">
            <div className="container">
                <div
                className={`absolute inset-0 bg-[url('./assets/hero.png')] bg-cover bg-center h-[800px]`}
                style={{
                    backgroundBlend: 'overlay',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
                />
                <div className='grid grid-cols-2'>
                    <div className="relative z-10 flex flex-col justify-center h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="">
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                        Enjoy Your
                        <br />
                        Morning Coffee.
                        </h1>

                        <p className="text-gray-300 mb-8 text-lg">
                        The Coffee Is Brewed By Flat Roasting The Green Coffee
                        <br />
                        Beans Over Hot Coals In Brazier. Given To Opportunity
                        </p>

                        <div className="flex items-center gap-8">
                        <button
                            className="px-8 py-3 bg-[#C8A27A] text-white font-medium hover:bg-[#B89165] transition-colors"
                        >
                            TEST COFFEE
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className='flex justify-center items-center z-50'>
                    <button
                        className="flex flex-col items-center gap-3 text-white hover:text-[#C8A27A] transition-colors"
                    >
                        <BsPlayCircle size={40} />
                        <span className="uppercase text-sm tracking-wider">Play Video</span>
                    </button>
                    </div>
                </div>
            </div>
      </section>
    )
  }
}
