import axios from 'axios';
import React, { Component } from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LuShoppingBag } from 'react-icons/lu';
import img1 from "../../assets/proccess1.png"

export default class Products extends Component {
    constructor(){
        super();
        this.state ={
            data: null
        }
    }
    componentDidMount(){
        axios
            .get('https://dummyjson.com/products')
            .then(res => this.setState({data: res.data.products}))
    }
  render() {
    return (
      <section className='bg-[#14110E] pt-[140px]'>
        <div className="container">
            <div className='text-center'>
                <p className='text-[#C99E71] text-lg'>Popular Product</p>
                <h3 className='text-[48px] text-white'>Coffee popular Product</h3>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    this.state.data?.map(pro => (
                        <div className='group duration-500 flex flex-col p-8 relative overflow-hidden cursor-pointer'>
                            <div>
                                <img src={pro.thumbnail} alt="" />
                            </div>
                            <div className='text-center'>
                                <div className='duration-500 flex gap-1 justify-center text-xl mt-3 group-hover:hidden text-[#C99E71]'>
                                    <span><IoIosStar/></span>
                                    <span><IoIosStar/></span>
                                    <span><IoIosStar/></span>
                                    <span><IoIosStar/></span>
                                    <span><IoIosStarOutline /></span>
                                </div>
                                <div>
                                    <h3 className='text-[24px] text-white line-clamp-1' title={pro.title}>{pro.title}</h3>
                                    <p className='text-white group-hover:hidden'>PRICE - <span className='text-[#C99E71]'>{pro.price}/</span><span>{pro.discountPercentage}</span></p>
                                </div>
                                <div className='w-full duration-300 absolute bottom-[-20%] left-[50%] translate-x-[-50%] group-hover:bottom-[0%]'>
                                    <button className='flex items-center gap-3 px-5 py-3 bg-[#C99E71] text-white mx-auto'><LuShoppingBag/> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    )
  }
}
