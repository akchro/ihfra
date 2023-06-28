import Image from 'next/image'
import GlobeComponent from "@/assets/globe";
import {Suspense} from "react";
import Loading from "@/app/loading";
import IhfraSplash from '../assets/ihfrasplash.png'


export default function Home() {
  return (
    <main id={'root'}>

        <div className={"w-screen text-center content-center flex justify-center overflow-hidden"}>
            <div className={"absolute"}>
                <h1 className={"text-[300px] z-0"}>
                    IHFRA
                </h1>
            </div>
        </div>
        
        <div className={'h-[900px] w-full z-10 absolute top-[50px]'}>
            <GlobeComponent/>
        </div>
        {/*<div className={'h-[900px]'}>*/}
        {/*    test*/}
        {/*</div>*/}
    </main>
  )
}
