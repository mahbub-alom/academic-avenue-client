import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black '>
      <footer className="footer p-10  text-base-content">
        <div className='text-white'>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Rules & Regulations</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className='text-white'>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Instructors</a>
        </div>
        <div className='text-white'>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">+8801700000000</a>
          <a className="link link-hover">info@bd.com</a>
          <a className="link link-hover"> Banani - 1212</a>
        </div>
        <div className='text-white'>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-info text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-slate-950  text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by Academic Avenue</p>
        </div>
        
      </footer>
      </div>
  )
}