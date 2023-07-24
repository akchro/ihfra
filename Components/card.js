import Image from "next/image";

const Card = (props) => {

    const topColor = {background: props.topColor}

    return (
        <div className={"w-[220px] text-center h-[350px] shadow-lg rounded-2xl flex flex-col items-center z-10 mb-10 overflow-hidden"}>
            <div className={"h-[15px] w-full overflow-hidden mb-8"} style={topColor}></div>
            <Image src={props.img} alt={props.alt} width={50} height={50}/>
            <h2 className={"text-4xl mt-4 mb-4"}>{props.stat}</h2>
            <p className={"text-xl"}>{props.description}</p>

        </div>
    )
}

export default  Card