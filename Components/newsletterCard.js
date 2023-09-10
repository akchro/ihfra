import Image from "next/image";
import Link from "next/link";

const NewsletterCard = (props) => {

    return (
        <Link href={`/newsletter/${props.id}`} className={"transition ease-in-out hover:scale-125 w-[270px] text-center h-[220px] shadow-lg rounded-2xl flex flex-col items-center z-10 mb-10 overflow-hidden"}>
            <div className={"h-[15px] w-full overflow-hidden mb-9"} style={{background: 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(47,71,79,1) 82%)'}}/>
            <div className={"text-xl mt-4 mb-4 px-5 "}>{props.title}</div>
        </Link>
    )
}

export default NewsletterCard