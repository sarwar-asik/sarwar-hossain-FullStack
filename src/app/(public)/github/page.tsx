import { Image } from 'antd'
import React from 'react'

export default function GithubPage() {
    return (
        <div className='bg-secondary min-h-screen'>
            {/* <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white mt-9">
                My Github Real-time States
            </h1> */}

            <div className="text-center mt-7">
                <a href="https://git.io/typing-svg">
                    <Image
                        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=33&pause=1000&center=true&vCenter=true&multiline=true&width=560&lines=Full+Stack+Web+Developer&lines=Sarwar+Hossain+Github+states"
                        alt="Typing SVG"
                    />
                </a>
            </div>
            <p className="font-normal  mt-2 text-[1em] text-center text-slate-400 mb-8">
                From 2022 my realtime Github activities and contribution  here.
            </p>
            <div className="text-center space-y-5 lg:space-y-10 mt-7">

                <Image
                    className="inline"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=sarwar-asik&theme=dark&hide_border=true"
                    alt="GitHub Streak Stats"
                />

                <div className="text-center">
                    <Image
                        src="https://github-readme-stats.vercel.app/api?username=sarwar-asik&show_icons=true&theme=transparent"
                        alt="GitHub Stats"
                    />
                </div>
            </div>

            <div className="text-center mt-3 lg:mt-7">
                <Image
                    className="inline"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=sarwar-asik&theme=maro&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
                    alt="Top Languages"
                />
            </div>

        </div>
    )
}
