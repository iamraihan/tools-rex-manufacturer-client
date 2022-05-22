import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="footer p-10 bg-secondary text-base-100  ">
            <div className='footer max-w-screen-xl mx-auto'>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text text-base-100">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="Your Email Address" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-xl hover:text-base-100 border-0"><FaTelegramPlane></FaTelegramPlane></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;