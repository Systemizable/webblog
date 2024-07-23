import React from 'react';
import { infinity } from 'ldrs';

infinity.register();

const LoaderComponent = ({ isLoading }) => (
    <div aria-live="polite" aria-busy={isLoading}>
        {isLoading && (
            <l-infinity
                size="55"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="white"
                style={{ backgroundColor: 'black', padding: '10px', borderRadius: '50%' }}
            ></l-infinity>
        )}
    </div>
);

export default LoaderComponent;