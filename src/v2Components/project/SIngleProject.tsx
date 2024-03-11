import React from 'react';
import "./project.css";
import { IProjectData } from '@/type/project';
import { Image as ImageAnt } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
// import Image from 'next/image';
// import Image from 'next/image';

export default function SIngleProject({ projectData }: { projectData: IProjectData }) {

//     // <a href="https://ibb.co/992vPxZ"><img src="https://i.ibb.co/BVjPkhn/nextjs-icon-512x512-y563b8iq.png" alt="nextjs-icon-512x512-y563b8iq" border="0"></a>
// <a href="https://ibb.co/gmspVjV"><img src="https://i.ibb.co/17H56v6/redux.png" alt="redux" border="0"></a>
// <a href="https://ibb.co/LdSTj5V"><img src="https://i.ibb.co/Mknzw6F/ts.png" alt="ts" border="0"></a>
    // console.log("🚀SIngleProject ~ projectData:", projectData)

    return (
        <div className="card">
            <div className="card__image">
                <ImageAnt

                    // height={300} width={300}
                    src={projectData?.img} alt='project' />
            </div>
            <div className="card__content">
                <p className="card__title">{projectData?.name}</p>

                <p className="card__text">

                    <span className="categories">

                        {/* <a className="categories__btn" href="#">Typescript</a>
                        <a className="categories__btn" href="#">Redux</a> */}
                        {
                            projectData?.tech?.map((te: string) => <img className='categories__btn' key={te} src={te}
                            //  height={20} width={20} 
                             style={{
                                height: '24px', width: "30px"
                            }} alt='tech' />)
                        }
                    </span>
                </p>

                <a className="card__button" href="#">Read More</a>
            </div>
            <div className="source">
                <Link href={projectData?.live} target="_blank"
                    referrerPolicy="no-referrer" className='no-underline text-white cursor-move p-3  text-xl' passHref>Live </Link>
                <Link href={projectData?.source} target="_blank"
                    referrerPolicy="no-referrer" className='no-underline text-white cursor-move p-3  text-xl'>Code </Link>
            </div>
        </div>
    )
}
