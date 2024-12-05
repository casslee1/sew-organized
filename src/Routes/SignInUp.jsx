import SignUp from '../Components/SignUp/SignUp';
import SignIn from '../Components/signIn/SignIn';
import {useState} from 'react';

const SignInUp = () => {
const [inOrUp, setInOrUp] = useState('in');

const handleClick = () => {
    setInOrUp('up');
}

if (inOrUp === 'in'){
    return(
        <div>
            <SignIn/>
            <button onClick={handleClick}>Sign Up</button>
        </div>
    );
}
else{
    return(
        <div>
            <SignUp/>
        </div>
    );
}
};

export default SignInUp;