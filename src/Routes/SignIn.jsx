import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const handleSignUpClick = () => {
        navigate('/SignUp');
    }
    const handleHomeClick = () => {
        navigate('/');
    }

    const handleLogin = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <div>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input  
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Enter password"
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