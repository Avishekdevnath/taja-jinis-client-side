import React from 'react';
import OfferTime from './OfferTime';

const Offer = () => {
    return (
       <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  place-items-center'>
            <div class="shadow-lg shadow-pink-300 card w-96 h-96 bg-[#63cdda] shadow-lg my-10 ">
                <div class="card-body">
                    <h2 class="card-title">৳৩০০</h2>
                    <h2 class="card-title">শাকসবজির বিশেষ অফার</h2>
                    <p class="card-text">For most businesses event like book fair, craft fair.</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>limited space access</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Secuirty facility</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>event support</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Decoration design</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Per day bill</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-outline w-full font-bold">Buy Now</button>
                    </div>
                </div>
            </div>

            <div class="shadow-lg shadow-blue-300  card w-96 h-96 bg-[#feca57] shadow-lg my-10">
                <div class="card-body ">
                    <h2 class="card-title">৳১২০০</h2>
                    <h2 class="card-title">ফলের বিশেষ অফার</h2>
                    <p class="card-text">For most corporate business events </p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Full space access</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Dedicated team</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Buffet food</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>premium Decoration</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>pay as plan</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-outline w-full font-bold  ">Buy Now</button>
                    </div>
                </div>
            </div>


            <div class="shadow-lg shadow-orange-300  card w-96 h-96 bg-[#f78fb3] shadow-lg my-10">
                <div class="card-body">
                    <h2 class="card-title">৳৭০০</h2>
                    <h2 class="card-title">বিশেষ অফার</h2>
                    <p class="card-text">For most weddings with premium plans </p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Full space access</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Dedicated team</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Buffet food</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>premium Decoration</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>pay as plan</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-outline w-full font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

        {/* <OfferTime></OfferTime> */}
       </div>
    );
};

export default Offer;