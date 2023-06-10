import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
    }
        return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password"></input>
                </div>
                </form>
                <p> Your Form Data:</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
    )
};

export default HookForm
