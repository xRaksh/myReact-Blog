const Contact = () => {
    return (
        <><div className="container">
            <div className="cont">
                <h2>Feel Free to Contact Us</h2>

                <form action="/" method="POST" className="contact">
                    <input type="text" placeholder="First Name" name="fname" autoComplete="off" required />
                    <input type="text" placeholder="Last Name" name="lname" autoComplete="off" required />
                    <input type="email" placeholder="Email" name="email" autoComplete="off" required />
                    <textarea name="message" placeholder="Message" cols="30" rows="5" autoComplete="off" required></textarea>
                    <button className="btn">Submit</button>
                </form>
            </div>

        </div>
        </>
    )
}
export default Contact;