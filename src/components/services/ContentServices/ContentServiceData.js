import "../ContentServiceStyle.css";

function ContentServiceData(props) {
    return (
        <>
            <div className="c-image">
                <img src={props.image} alt="imageDefault"/>
            </div>
            <h2>{props.header}</h2>
            <div className="c-textH">
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text5}</p>
            </div>
            
            {/* <h4 className="header2">{props.header2}</h4> */}

        </>
    )
}

export default ContentServiceData;