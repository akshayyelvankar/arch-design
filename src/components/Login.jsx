
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoginButtonVisible, setIsLoginButtonVisible] = useState(true);

    // Captcha related state variables
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [isCaptchaEntered, setIsCaptchaEntered] = useState(true);
    const [isCaptchaSubmitted, setIsCaptchaSubmitted] = useState(false);
    const [showCaptchaMessage, setShowCaptchaMessage] = useState('');
    const [enteredCaptcha, setEnteredCaptcha] = useState('');

    // State to track if the submit button is enabled
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);


    // Handler for email input change
    const handleEmailChange = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);
        checkSubmitAvailability();
    };


    // Handler for password input change
    const handlePasswordChange = (event) => {
        const enteredPassword = event.target.value;
        setPassword(enteredPassword);
        checkSubmitAvailability();
    };
    // Handler for toggling password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Function to generate a random captcha
    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }


    // Handler for refreshing the captcha
    const handleRefreshCaptcha = (e) => {
        e.preventDefault()
        if (!isCaptchaSubmitted) {
            setCaptcha(generateCaptcha());
        }
    };


    // Handler for captcha input change
    const handleCaptchaChange = (event) => {
        const enteredCaptcha = event.target.value;
        setEnteredCaptcha(enteredCaptcha);
        checkSubmitAvailability();
    };


    // Handler for submitting the captcha
    const handleSubmitCaptcha = (event) => {
        event.preventDefault();  // Prevent the default form submission behavior

        const correctCaptcha = captcha;

        if (enteredCaptcha === correctCaptcha) {
            setShowCaptchaMessage('Entered captcha is correct');
            setIsCaptchaSubmitted(true);
            checkSubmitAvailability();
            setIsLoginButtonVisible(true);
            setIsSubmitEnabled(true);
        } else {
            setShowCaptchaMessage('Entered captcha is wrong');
            setIsCaptchaSubmitted(false);
            setIsSubmitEnabled(false);
            setIsLoginButtonVisible(false);
        }
    };

    // Handler to check if the submit button should be enabled
    const checkSubmitAvailability = () => {
        const isEmailValid = email.trim() !== '';
        const isPasswordValid = password.trim() !== '';
        const isCaptchaValid = enteredCaptcha.length === 6 && isCaptchaSubmitted; // Check if captcha is entered and submitted

        // Enable the submit button if email, password, and captcha are valid
        setIsSubmitEnabled(isEmailValid && isPasswordValid && isCaptchaValid);
    };

    const handleGoogleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            // Handle successful Google login
        } catch (error) {
            // Handle errors during Google login
            console.error('Error during Google login:', error);
        }
    };

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    setEmail('');
                    setPassword('');
                    setEnteredCaptcha('');
                    setIsSubmitEnabled(false); // Disable the submit button after submission
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <Wrapper>
            
           
            <form className='my-4'>
            <h1>Login</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Add reCAPTCHA */}
                {/* Captcha Generator */}
                <div className="container">
                    <header>Captcha Verification</header>
                    <div className="input_field captch_box">
                        <input type="text" value={captcha} disabled />
                        <button className="refresh_button" onClick={(e)=>handleRefreshCaptcha(e)}>
                            <i className="fa-solid fa-rotate-right"></i>
                        </button>
                    </div>
                    <div className="input_field captch_input">
                        <input type="text" placeholder="Enter captcha" onChange={(e)=>handleCaptchaChange(e)} />
                    </div>

                    <div className={`message ${showCaptchaMessage ? 'active' : ''}`}>
                        {showCaptchaMessage}
                    </div>

                    <div className={`input_field button  'enabled' : 'disabled'}`}>
                        <button onClick={(e)=>handleSubmitCaptcha(e)}>Submit Captcha</button>
                    </div>

                </div>

                <div className={`professional-button ${isLoginButtonVisible ? 'visible' : 'hidden'}`}>
                    <button type="submit" disabled={!isSubmitEnabled} onClick={(e)=>handleSubmit(e)}>
                        Login
                    </button>
                </div>
                <div className="forgot-password-link">
                    <a href="/forgot-password">Forgot Password</a>
                </div>

                <GoogleLoginButton>
                    <button onClick={handleGoogleLogin}>Login with Google</button>
                </GoogleLoginButton>

                <div className="already-have-account">
                    Haven't Registered yet?{' '}
                   <NavLink to={'/register'}><span className="login-text">Register Now</span></NavLink> 
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; 
    
  

  h1 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 20px;
  }

  form {
    width: 50%;
    padding: 20px;
    background: url('/pratik/images/bg.jpg') no-repeat center center fixed;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    .mb-3 {
      margin-bottom: 20px;
    }

    .form-label {
      font-size: 1.2em;
      color: #222;
      display: block;
    }

    .form-control {
      font-size: 1em;
      background-color: #444;
      color: #fff;
      border: 1px solid #222;
      border-radius: 5px;
      padding: 10px;
    }

    .input-group .btn {
      fill: white;
      width: 20px;
      height: 20px;
    }

    .input-group .btn-light:hover {
      fill: white;
      width: 20px;
      height: 20px;
    }

    .input-group .btn-light:focus {
      fill: white;
      width: 20px;
      height: 20px;
    }

    .input-group .btn .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

.input-group .btn-light:hover .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

.input-group .btn-light:focus .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

    .password-strength-bar {
      width: 20%;
      height: 4px;
      background-color: #f0f0f0;
      border-radius: 5px;
      margin-top: 5px;
      overflow: hidden;
    }

    .strength-indicator {
      height: 100%;
      border-radius: 5px;
      width: 5%;
    }

    .password-strength-text {
      font-weight: bold;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      color: black;
    }

    .strength-indicator {
      background-color: transparent;
    }

    .strength-indicator.average {
      background-color: orange;
    }

    .strength-indicator.strong {
      background-color: green;
    }
  }

  .container {
  position: relative;
  max-width: 300px;
  width: 100%;
  border-radius: 12px;
  padding: 15px 25px 25px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

header {
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.input_field {
  position: relative;
  height: 45px;
  margin-top: 15px;
  width: 100%;
}

.refresh_button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: #826afb;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}

.refresh_button:active {
  transform: translateY(-50%) scale(0.98);
}

.input_field input,
.button button {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
}

.input_field input {
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.captch_box input {
  color: #6b6b6b;
  font-size: 22px;
  pointer-events: none;
}

.captch_input input:focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.message {
  font-size: 14px;
  margin: 14px 0;
  display: none;
}

.message.active {
  display: block;
  color: #826afb ; /* Set the color to green for the correct captcha */
}

.button button {
  width: 80%;
  padding: 10px;
  font-size: 1.2em;
  cursor: pointer;
}

.button button:hover {
  background: #6345d1;
}

.button button:active {
  transform: scale(0.98);
}

.button button:disabled {
  background: #ccc; /* Change the background color for disabled state */
  cursor: not-allowed; /* Change the cursor for disabled state */
}

.button button:disabled:hover {
  background: #ccc; /* Maintain the same background color for hover in disabled state */
}

/* Style for the professional button */
.professional-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  background: linear-gradient(45deg, #3498db, #2980b9); /* Gradient background */
  color: #fff; /* Text color */
  border: none;
  cursor: pointer;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); /* Box shadow for a subtle lift */
}

.professional-button:hover {
  background: linear-gradient(45deg, #2980b9, #3498db); /* Change gradient on hover */
}

.professional-button:active {
  transform: scale(0.98);
}

.professional-button:focus {
  outline: none; /* Remove outline on focus */
}

.already-have-account {
    text-align: center;
    margin-top: 20px;
    font-size: 1.1em;
  }

  .login-link {
    text-decoration: none;
  }

  .login-text {
    color: blue;
  }
`;

const GoogleLoginButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #357ae8;
    }

    &:focus {
      outline: none;
    }

    .icon {
      margin-right: 10px;
    }
  }


`
export default Login;