import { useNavigate } from "react-router-dom";
import axios from "axios";
import{ useState } from "react";

const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleSignInClick = () => {
        navigate('/signIn');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //check email valid
        const email = e.target.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return; 
        }

        //check password is strong and passwords match 
        const password = e.target.password.value;
        const checkPassword = e.target.checkPassword.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
            return; 
        }

        if (password !== checkPassword) {
            setError("Passwords do not match. Please try again.");
            return;
        }
        
        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            preferredUnits: e.target.preferredUnits.value,
        };

        try {
            const response = await axios.put("http://localhost:8080/users/addUser", formData)
            console.log(response);
            navigate("/fabric");
        }
        catch (error) {
            console.error("Error details:", error.response || error.message);
                if (error.response && error.response.status === 400) {
                    setError("Email already exists. Please try signing in.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        }
    };
    
    return(
        <div>
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    required
                />
                <br />
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    required
                />
                <br />
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    required
                />
                <br />
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    required
                />
                <br />
                <label>Re-enter password:</label>
                <input 
                    type="password"
                    name="checkPassword"
                    placeholder="Re-enter password" 
                    required
                />
                <br />
                <label>Preferred measurement units:</label>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="preferredUnits" 
                            value="Metric"
                            required
                        />
                        Metric
                    </label>
                    <div>
                    <label>
                        <input 
                            type="radio" 
                            name="preferredUnits" 
                            value="Imperial"
                            required
                        />
                        Imperial
                    </label>
                </div>
                </div>
                <br />
                <button type="submit">Create Account</button>
            </form>
            <div>
                <button onClick={handleHomeClick}>Home</button>
            </div>
            <div>
                <button onClick={handleSignInClick}>Sign In</button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
    
    };
    
    export default SignUp;