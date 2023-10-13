import "./FooterStyles.css";

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="top">
                <div>
                    <h2>DSG TECHNOLOGY</h2><br/>
                    <p>14th Floor Noble Center</p>
                    <p>Victoria, Makumbusho</p>
                    <p>Dar es Saalam</p><br/>

                    <p><b>Phone 1: </b> +255 719 616 657</p>
                    <p><b>Phone 2: </b> +255 746091570</p>
                    <p><b>Email: </b> zeflojujo53@gmail.com</p>
                </div>

                <div>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                </div>
                
            </div>

            <div className="bottom">
                <div>
                    <h4>Useful Links</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Products</a>
                    <a href="/">Contact</a>
                </div>
                <div className="services">
                    <h4>Our Services</h4>
                    <a href="/">Software Development</a>
                    <a href="/">Mobile App Development</a>
                    <a href="/">Enterprise Application</a>
                    <a href="/">Penetration Testing</a>
                    <a href="/">IT System Auditing</a>
                </div>
                <div className="about">
                    <h4>About Us</h4>
                    <p>In 2012, DSGTechnology was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond. Since its inception, DSGTechnology has grown from a startup incubatee, to a high growth technology company serving clients across the globe.</p>
                    <h2><i>Information Security Policy</i></h2>
                </div>
            </div>

            

        </div>
        <div className="lower">
            <p>&copy; DSGTechnology 2023, All rights are reserved.</p>
        </div>
        </>
        
    )
}

export default Footer;