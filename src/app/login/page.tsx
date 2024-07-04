import "./login.css";

export default function pages() {
  return (
    <div className="container">
      <div className="left-panel">
        <p className="welcome-text">Welcome,</p>
        <p className="sign-up-text">Please sign up to login</p>
        <button className="sign-up-button">Sign Up</button>
      </div>
      <div className="right-panel">
        <p className="login-text">Login</p>
        <div className="person-name">
          <label className="person-name">Enter your first name</label>
          <input
            type="text"
            id="person-name-input"
            name="person-name"
            className="person-name-input"
          />
        </div>

        <div className="person-surname">
          <label className="person-surname">Enter your last name</label>
          <input
            type="text"
            id="person-surname"
            name="person-surname"
            className="person-surname-input"
          />
        </div>

        <div className="person-email">
          <label className="person-email">Enter your email</label>
          <input
            type="email"
            id="person-email"
            name="person-email"
            className="person-email-input"
          />
        </div>

        <div className="person-password">
          <label className="person-password">Enter your password</label>
          <input
            type="password"
            id="person-password"
            name="person-password"
            className="person-password-input"
          />
        </div>

        <div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}
