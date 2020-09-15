import React, { useState } from 'react'


function LoginPage() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.Email);
    }

    const onPassHandler = (event) => {
        setPassword(event.currentTarget.Password);
    }

    return (
        <div style={{ 
            display:'flex', justifyContent:'center', alignItems: 'center', width:'100%', 'height':'100vh'
        }}>
            <form style={{display:'flex', msFlexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>password</label>
                <input type="password" value={Password} onChange={onPassHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
