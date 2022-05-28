import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-neutral text-neutral-content text-center font-bold text-xl  pb-6 '>

   
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title text-xl  text-warning">যোগাযোগ তথ্য</span>
        <Link to="" class="link link-hover">চট্টগ্রাম, বাংলাদেশ</Link>
        <Link to="" class="link link-hover">example@Gmail.Com</Link>
        <Link to="" class="link link-hover"> +123-456-7890</Link>
        <Link to="" class="link link-hover"> +123-456-7890</Link>
      </div>
      <div>
        <span class="footer-title text-xl  text-warning">শাখার অবস্থান</span>
        <Link to="" class="link link-hover">চট্টগ্রাম</Link>
        <Link to="" class="link link-hover">ঢাকা</Link>
        <Link to="" class="link link-hover">সিলেট</Link>
        <Link to="" class="link link-hover">রাজশাহী</Link>
      </div>
      <div>
        <span class="footer-title text-xl  text-warning">সরাসরি লিঙ্ক</span>
        <Link to="" class="link link-hover">হোম</Link>
        <Link to="" class="link link-hover">আমাদের </Link>
        <Link to="" class="link link-hover">ক্যাটাগরি</Link>
        <Link to="" class="link link-hover">নিবন্ধন</Link>
        <Link to="" class="link link-hover">যোগাযোগ</Link>
      </div>
      <div>
        <span class="footer-title text-xl  text-warning ">আমাদের অনুসরণ করুন</span>
        <Link to="" class="link link-hover">ইনস্টাগ্রাম</Link>
        <Link to="" class="link link-hover">ফেসবুক</Link>
        <Link to="" class="link link-hover">টুইটার</Link>
        <Link to="" class="link link-hover">লিঙ্কডইন</Link>
      </div>
      {/* <div>
        
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div> */}
    </footer>

    <h3 class="text-center">Build By <span class="special-text text-warning">Taja jinis</span> &copy;Copyright All
        Right Reserved. </h3>
    </div>
  );
};

export default Footer;