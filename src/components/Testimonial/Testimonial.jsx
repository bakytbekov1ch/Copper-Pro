import React from 'react'

import  avatar from "../../Assets/svg/avatar 57.svg"
import testi from "../../Assets/svg/testimonial.svg"

import "./testimonial.scss"

const Testimonial = () => {
  return (
    <div className='testimonial container'>
        <img src={testi} alt="" className='testi'/>
        <img src={testi} alt="" className='testi2'/>
      <div className='testimonial-title'>
        <p>Testimonial</p>
        <h1>People Talk about us</h1>
      </div>
      <div className='testimonial-blogs'>
        <div>
            <section>
                <img src={avatar} alt="" />
                <span>
                    <h1>Angel Rose</h1>
                    <p>Creative Manager</p>
                </span>
            </section>
            <p className='text-testi'>
                There are many variations passages of Lorem Ipsum majority some by words which don't look . 
            </p>
        </div>
        <div>
            <section>
                <img src={avatar} alt="" />
                <span>
                    <h1>Angel Rose</h1>
                    <p>Creative Manager</p>
                </span>
            </section>
            <p className='text-testi'>
                There are many variations passages of Lorem Ipsum majority some by words which don't look . 
            </p>
        </div>
        <div>
            <section>
                <img src={avatar} alt="" />
                <span>
                    <h1>Angel Rose</h1>
                    <p>Creative Manager</p>
                </span>
            </section>
            <p className='text-testi'>
                There are many variations passages of Lorem Ipsum majority some by words which don't look . 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
