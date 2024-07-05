import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LoginForm.css';

const LoginForm = ({ setUserId }) => {
    const [action, setAction] = useState('login');
    const history = useHistory();
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginData;
        const apiUrl = `https://softwarebackenddeployment2.azurewebsites.net/api/Account/authenticate?Email=${encodeURIComponent(email)}&Password=${encodeURIComponent(password)}`;

        try {
            const response = await axios.post(apiUrl);
            const userId = response.data.data.id;
            localStorage.setItem('userId', userId);
            console.log('Login successful', response.data);
            setUserId(userId);
            history.push({
                pathname: '/home',
                state: { userId }
            });
        } catch (error) {
            console.error('Login failed', error);
            if (error.response && error.response.status === 400) {
                setError('Wrong email or password');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, userName, password, confirmPassword } = registerData;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const apiUrl = `https://softwarebackenddeployment2.azurewebsites.net/api/Account/register?FirstName=${encodeURIComponent(firstName)}&LastName=${encodeURIComponent(lastName)}&Email=${encodeURIComponent(email)}&UserName=${encodeURIComponent(userName)}&Password=${encodeURIComponent(password)}&ConfirmPassword=${encodeURIComponent(confirmPassword)}`;

        try {
            const response = await axios.post(apiUrl);
            console.log('Registration successful', response.data);
            setAction('login');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className='loginFormContainer'>
            <div className='wrapper'>
                {action === 'login' ? (
                    <div className='form-box login'>
                        <form onSubmit={handleLoginSubmit}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="email" name="email" placeholder='Email' value={loginData.email} onChange={handleLoginChange} required />
                            </div>
                            <div className="input-box">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={loginData.password} onChange={handleLoginChange} required />
                                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={toggleShowPassword}></i>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                            <button type="submit" className="login-button">Login</button>
                            <div className="login-register-link">
                                <p>Don't have an account? <a href="#" onClick={() => setAction('register')}>Register</a></p>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className='form-box register'>
                        <form onSubmit={handleRegisterSubmit}>
                            <h1>Registration</h1>
                            <div className="input-box">
                                <input type="text" name="firstName" placeholder='First Name' value={registerData.firstName} onChange={handleRegisterChange} required />
                            </div>
                            <div className="input-box">
                                <input type="text" name="lastName" placeholder='Last Name' value={registerData.lastName} onChange={handleRegisterChange} required />
                            </div>
                            <div className="input-box">
                                <input type="text" name="userName" placeholder='Username' value={registerData.userName} onChange={handleRegisterChange} required />
                            </div>
                            <div className="input-box">
                                <input type="email" name="email" placeholder='Email' value={registerData.email} onChange={handleRegisterChange} required />
                            </div>
                            <div className="input-box">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={registerData.password} onChange={handleRegisterChange} required />
                                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={toggleShowPassword}></i>
                            </div>
                            <div className="input-box">
                                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder='Confirm Password' value={registerData.confirmPassword} onChange={handleRegisterChange} required />
                                <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={toggleShowConfirmPassword}></i>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                            <button type="submit" className="register-button">Register</button>
                            <div className="register-login-link">
                                <p>Already have an account? <a href="#" onClick={() => setAction('login')}>Login</a></p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginForm;
