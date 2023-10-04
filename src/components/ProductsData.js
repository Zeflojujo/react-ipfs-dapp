import "./ServiceStyles.css";

function ProductsData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="imageDefault"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href="/">READ MORE</a>
        </div>
    )
}

export default ProductsData;