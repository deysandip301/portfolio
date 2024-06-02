import './ConactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <h3>Send me an email</h3>
            <form className="all-inputs">
                <div className="inputs">
                    <div className="name-and-email">
                        <div className="input-item">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." required/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email.." required/>
                        </div>
                    </div>
                    <div className="message-input">
                        <div className="input-item">
                            <label htmlFor="message">message</label>
                            <textarea id="message" name="message" placeholder="Write something.." required></textarea>
                        </div>
                    </div>
                </div>
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ContactForm;