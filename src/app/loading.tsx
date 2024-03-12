import Loading from '@/v2Components/UI/Loading';
import React from 'react';


const LoadingPage = () => {
    return (
        // <div style={{
        //     height:"100vh",
        //     display:"flex",
        //     justifyContent:"center",
        //     alignItems:"center"
        // }}>
        //     <Image height={200} width={200} style={{
        //         marginInline:"auto",
        //         // width:"50%"
        //     }} src={loaderImg} alt='loader'/>
        // </div>
        <div className="min-h-screen bg-secondary m-auto pt-12">
            <Loading />
        </div>
    );
};

export default LoadingPage;