import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isMatch, setIsMatch] = useState(false)
    
    const [firstError, setFirstError] = useState("");
    const handleFirst = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstError("First Name must be longer than 2 characters.")
        }
        else {
            setFirstError("")
        }
    }
    const [lastError, setLastError] = useState("");
    const handleLast = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastError("Last Name must be longer than 2 characters.")
        }
        else {
            setLastError("")
        }
    }
    const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be longer than 5 characters.")
        }
        else {
            setEmailError("")
        }
    }
    const [passError, setPassError] = useState("");
    const handlePass = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPassError("Password must be at least 8 characters.")
        }
        else {
            setPassError("")
        }
    }
    const [confirmPassError, setConfirmPassError] = useState("");
    const handleConPass = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length === 0) {
            setPassError("")
            setIsMatch(false)
        }
        else if(e.target.value !== password) {
            setPassError("Passwords must match.")
            setIsMatch(true)
        }
        else {
            setPassError("")
            setIsMatch(false)
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
    }
    return(
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirst} />
                        {firstError ?
                        <p>{ firstError }</p> : '' }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLast} />
                            {lastError ?
                            <p>{lastError}</p> : ''}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} />
                            {emailError ?
                            <p>{emailError}</p> : ''
                        }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePass} />
                            {passError ?
                            <p>{passError}</p> : ''
                        }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConPass} />
                            {isMatch ?
                            '' : <p>{confirmPassError}</p> 
                        }
                </div>
                    <input type="submit" value = "Create User"></input>
                <p> Your Form Data:</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
                </form>
    )
    ;
}
    
    export default HookForm
    