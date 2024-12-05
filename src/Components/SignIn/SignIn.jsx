
const SignIn = () => {

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
        </div>
        <div>
            
        </div>
    </div>
  
);

};

export default SignIn;