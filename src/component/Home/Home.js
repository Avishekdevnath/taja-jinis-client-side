import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Developer from './Developer/Developer';
import NeedHelp from './NeedHelp/NeedHelp';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>

            <h1 class="text-center font-bold text-3xl  my-10"><u class="underline">ক্যা<span class="text-warning">টা</span>গরি</u></h1>
            <Category></Category>



            <h1 className="text-center font-bold text-3xl my-10"><u class="underline">আমাদের <span class="text-warning">অফার</span> সমুহ </u></h1>
            <Offer></Offer>


            <h2 class="text-center font-bold text-3xl  my-10">আমাদে <span class="text-warning">র প্র</span>কৌশলীরা</h2>
            <Developer></Developer>



            
            <NeedHelp></NeedHelp>



        </div>
    );
};

export default Home;