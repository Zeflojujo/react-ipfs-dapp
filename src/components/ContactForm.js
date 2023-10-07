import "./ContactFormStyles.css";
import "./AboutUsStyles.css";

function ContactForm () {
    return (
        <>
            <div className="heading">
                <h1>Contact Us</h1>
                <p>We respect your privacy and Keep your data completely confidential.</p>
            </div>
            <hr className="horizontalLine"/>

            <div className="form-container">
                <div className="container">
                    <div>
                        <h2>Location:</h2>
                        <p>14th Floor Noble Centre</p>
                        <p>Victoria - Makumbusho</p>
                        <p>Dar es Saalam</p>
                    </div>

                    <div>
                        <h2>Contacts</h2>
                        <p>Email: zeflojujo53@gmail.com</p>
                        <p>Phone1: +255-719-616-657</p>
                        <p>Phone1: +255-746-091-570</p>
                    </div>
                </div>

                <h1 className="heading">Send Message To Us!</h1>

                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="message" rows={4}></textarea>
                    <button>Send Message</button>

                </form>
            </div>
        </>
        
    )
}

export default ContactForm;