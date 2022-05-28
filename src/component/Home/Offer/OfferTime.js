import React from 'react';

const OfferTime = () => {
    return (
        <div>
            <div class="flex gap-5">
                <div>
                    <span class="countdown font-mono text-4xl">
                        <span style="--value:15;"></span>
                    </span>
                    days
                </div>
                <div>
                    <span class="countdown font-mono text-4xl">
                        <span style="--value:10;"></span>
                    </span>
                    hours
                </div>
                <div>
                    <span class="countdown font-mono text-4xl">
                        <span style="--value:24;"></span>
                    </span>
                    min
                </div>
                <div>
                    <span class="countdown font-mono text-4xl">
                        <span style="--value:37;"></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default OfferTime;