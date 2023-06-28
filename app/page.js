import Image from 'next/image'
import GlobeComponent from "@/assets/globe";


export default function Home() {
  return (
    <main id={'root'}>
        <div className={'h-screen w-screen'}>
            <GlobeComponent/>
        </div>
    </main>
  )
}
