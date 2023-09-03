import Navbar from "@/Components/navbar";

export default function Page() {
    return (
        <>
            <Navbar/>
            <main className={'flex flex-col'}>
                <h1 className={'font-noto_sans text-5xl mt-5 ml-5'}>Latest newsletters</h1>
            </main>
        </>
    )
}