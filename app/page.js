import Image from 'next/image';
import Card from "@/Components/card";
import {Suspense} from "react";
import Loading from "@/app/loading";
import IhfraSplash from '../assets/ihfrasplash.png';
import dynamic from "next/dynamic";
import PersonIcon from '@/assets/icons/person.svg';
import HourglassIcon from '@/assets/icons/hourglass.svg';
import OrganizationIcon from '@/assets/icons/org.svg';
import LivesIcon from '@/assets/icons/lives.svg';

const GlobeComponent = dynamic(() => import('@/assets/globe'), {
    ssr: false
})

export default function Home() {

    return (
        <main id={'root'}>

            <div className={'bg-black h-[900px] rounded-b-[150px] lg:rounded-b-[200px]'}>
                <div className={"w-screen text-center content-center flex justify-center overflow-hidden"}>
                    <div className={"absolute"}>
                        <h1 className={"text-[100px] mt-20 lg:mt-0 lg:text-[300px] z-0 text-white"}>
                            IHFRA
                        </h1>
                    </div>
                </div>

                <div className={'h-full w-full z-10 absolute top-[50px]'}>
                    <GlobeComponent/>
                </div>
            </div>
            {/*<div className={'h-80 bg-gradient-to-b from-black via-gray-500 to-white'}></div>*/}
            <div className={'pt-36 px-16 flex justify-evenly flex-wrap mb-[150px]'}>
                <Card img={PersonIcon} stat={"150+"} description={"members"} topColor={"#fff04f"}/>
                <Card img={HourglassIcon} stat={"2000+"} description={"hours volunteered"} topColor={"#a4ff4f"}/>
                <Card img={OrganizationIcon} stat={"10+"} description={"organizations served"} topColor={"#4ad8ff"}/>
                <Card img={LivesIcon} stat={"1000+"} description={"lives changed"} topColor={"#ff2626"}/>
            </div>

            <div className={"h-[600px] bg-banner-pattern bg-cover bg-center mb-[150px] rounded-br-[150px] relative"}>
                <h1 className={"text-white text-5xl absolute left-20 bottom-20 font-noto_sans w-2/3 leading-tight font-bold tracking-wider "}>
                    Helping in the medical and humanitarian field in our community
                </h1>
            </div>

        </main>
    );
}
