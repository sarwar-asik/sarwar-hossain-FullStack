import React from 'react'
import loaderImg from "@/assets/Loader.gif"
import Image from 'next/image';
import "./loading.css"
export default function Loading() {
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
        <div className="py-3 ">
            <div className="loader">
                <span></span>
            </div>
        </div>
    )
}
