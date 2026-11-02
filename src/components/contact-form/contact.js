import "./contact.css";
import { useState } from "react";
const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "4c8e02f5-9eff-4034-a0a0-427941419513");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (response.ok) {
            setResult("Thank you! Your message has been sent.");
            event.target.reset();
        } else {
            setResult("Error: " + data.message);
        }
    }
    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <input type="hidden" name="subject" value="New Gamecock Game Day Guide Message" />
            <p>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" required />
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required />
            </p>
            <p>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </p>
            <p><button type="submit">Submit</button></p>
            <p>{result}</p>
        </form>
    );
}

export default Contact;