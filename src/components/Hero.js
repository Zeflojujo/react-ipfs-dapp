import "./HeroStyles.css";

function Hero (props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="heroImage" src={props.heroImg} />

                <div className="hero-text">
                    <div className="hero-inner">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                        <a 
                            href={props.url} 
                            className={props.btnClass}
                        >
                            {props.buttonText}
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero;