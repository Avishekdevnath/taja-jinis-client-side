import React from 'react';
import userImage from '../../assets/user.png'

const MyProfile = () => {
    const user = 'Niloydeyce@gmail.com';
    return (
        <div className='ml-10  mt-10 flex justify-center items-center'>
            <div class="card card-compact w-96  bg-base-100 shadow-xl">
                <figure><img className='w-80 h-80' src={userImage} alt="Shoes" /></figure>
                <div class="card-body text-center mx-auto">
                    <h2 class="card-title "> {user} </h2>                   
                </div>
            </div>
        </div>
    );
};

export default MyProfile;