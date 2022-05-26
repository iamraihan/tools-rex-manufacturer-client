import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-base-100  ">
            <div className='footer max-w-screen-xl mx-auto'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-base-100">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Your Email Address" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-xl hover:text-base-100 border-0"><FaTelegramPlane></FaTelegramPlane></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;