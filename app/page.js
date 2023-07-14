import Image from 'next/image'
import GlobeComponent from "@/assets/globe";
import Card from "@/Components/card";
import {Suspense} from "react";
import Loading from "@/app/loading";
import IhfraSplash from '../assets/ihfrasplash.png'


export default function Home() {
  return (
    <main id={'root'}>

        <div className={'bg-black h-[900px] rounded-b-[200px]'}>
            <div className={"w-screen text-center content-center flex justify-center overflow-hidden"}>
                <div className={"absolute"}>
                    <h1 className={"text-[300px] z-0 text-white"}>
                        IHFRA
                    </h1>
                </div>
            </div>

            <div className={'h-full w-full z-10 absolute top-[50px]'}>
                <GlobeComponent/>
            </div>
        </div>
        {/*<div className={'h-80 bg-gradient-to-b from-black via-gray-500 to-white'}></div>*/}
        <div className={'h-[900px] pt-36 px-36'}>
            <Card stat={"150+"} description={"members"}/>
        </div>

    </main>
  )
}
