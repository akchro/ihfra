

const Card = (props) => {
    return (
        <div className={"w-60 bg-red-300 text-center"}>
            <h3>{props.stat}</h3>
            <hr className={"border-solid"}/>
            <p>{props.description}</p>

        </div>
    )
}

export default  Card