import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext.jsx";

const SignIn = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { setUserID, setPreferredUnits } = useContext(UserContext);

    const handleSignUpClick = () => {
        navigate('/SignUp');
    }
    const handleHomeClick = () => {
        navigate('/');
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = { email, password };

        try {
            const response = await axios.post("http://localhost:8080/users/login", formData);
            console.log(response.data);

            if (response.data.success) {
                setUserID(response.data.data.userID);
                setPreferredUnits(response.data.data.preferredUnits)

                alert("Login Successful");
                navigate("/fabric");  
            } else {
                alert(response.data.message || "Login Failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    };
    
    return (
        <div>
            <div>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input  
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                </div>
                <div>
                    <button onClick={handleHomeClick}>Home</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
      
    );
    
    };
    
    export default SignIn;