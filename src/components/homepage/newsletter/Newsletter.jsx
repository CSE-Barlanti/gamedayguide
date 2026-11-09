import "./Newsletter.css";

const Newsletter = () => {
    return(
         <section className="newsletter-section">
            <h2>Never Miss A Gameday</h2>

            <p>
                Sign up for weekly email digests with parking updates, matchup
                previews, and exclusive Gamecock fan content.
            </p>

            <div className="newsletter-signup">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                />

                <button type="button">Subscribe</button>
            </div>
        </section>
    )
}

export default Newsletter;