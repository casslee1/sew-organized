

const SignUp = () => {

const handleSubmit = (e) => {
    e.preventDefault();
};

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name"
            />
            <br />
            <label>Last Name:</label>
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name"
            />
            <br />
            <label>Email:</label>
            <input 
                type="email" 
                name="email"
                placeholder="Email address" 
            />
            <br />
            <label>Password:</label>
            <input 
                type="password" 
                name="password"
                placeholder="Password" 
            />
            <br />
            <label>Re-enter password:</label>
            <input 
                type="password"
                placeholder="Re-enter password" 
            />
            <br />
            <label>Preferred measurement units:</label>
            <br />
            <button type="submit">Create Account</button>
        </form>
    </div>
);

};

export default SignUp;