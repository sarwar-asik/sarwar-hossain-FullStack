import React from 'react';
import loaderImg from "@/assets/Loader.gif"
import Image from 'next/image';


const LoadingPage = () => {
    return (
        <div style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Image height={200} width={200} style={{
                marginInline:"auto",
                // width:"50%"
            }} src={loaderImg} alt='loader'/>
        </div>
    );
};

export default LoadingPage;