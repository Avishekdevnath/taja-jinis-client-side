import React from 'react';

const NeedHelp = () => {
    return (
        <div className='bg-[#b8e994] py-20 text-center my-16  '>
            <h1 class="text-center font-bold text-3xl  my-5 ">যে<span class="text-warning">কো</span>নো প্রয়োজনে যোগাযোগ ক<span class="text-warning">রু</span>ন</h1>

           
                <div class="divider mx-20 "></div>
              

            <button type="button" class="mx-8 my-5  special-btn btn btn-info btn-lg rounded-pill  fw-bolder">ম্যানেজার</button>
            <button type="button" class="mx-8 my-5 btn btn-warning btn-lg rounded-pill  fw-bolder">সুপারভাইজার </button>
            <button type="button" class="mx-8 my-5 special-btn btn btn-info btn-lg rounded-pill  fw-bolder">প্রকৌশলী</button>
        </div>
    );
};

export default NeedHelp;