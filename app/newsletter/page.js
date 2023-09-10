import Navbar from "@/Components/navbar";
import {getSortedPostsData} from "@/lib/postFormat";
import Link from "next/link";
import NewsletterCard from "@/Components/newsletterCard";


export default function Page() {
    const allPostsData = getSortedPostsData()

    return (
        <>
            <Navbar/>
            <main className={'flex flex-col'}>
                <h1 className={'font-noto_sans text-5xl my-5 ml-5'}>Latest newsletters</h1>
                <div className={'mx-16'}>
                    <ul className={'flex gap-10 flex-wrap'}>
                        {allPostsData.map(({ id, title }) => (
                            <NewsletterCard id={id} title={title} />
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}