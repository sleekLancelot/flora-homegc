import React, { useState } from 'react'


const Login = ({ showLog }) => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginDetails;

    const onChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={`${showLog ? 'loginShow' : 'loginHide'}`} id="loginBox" method="post">
            <input id='firstOfType' onChange={onChange} name='email' type="text" placeholder="E-mail" value={email} required />
            <input onChange={onChange} name='password' type="password" placeholder="Password" value={password} required />

            <input style={{ marginTop: '40px' }} type='submit' value='Login' id='logsub' className="lr-submit" onClick={onSubmit} />
        </form>
    )
}

export default Login
