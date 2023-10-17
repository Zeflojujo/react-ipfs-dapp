import "./ContentServiceStyle.css";

function ContentServiceData(props) {
    return (
        <>
            <div className="c-image">
                <img src={props.image} alt="imageDefault"/>
            </div>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </>
    )
}

export default ContentServiceData;