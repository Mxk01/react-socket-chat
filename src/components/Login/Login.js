import React from 'react'
import { FormControl, InputLabel, FormHelperText, Input } from '@mui/material';
import './Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
function Login() {
    let navigate = useNavigate();
    // <a href="https://www.vecteezy.com/free-vector/web-developer">Web Developer Vectors by Vecteezy</a>
    return (
        <div className="login__form">
            <h1 className="login__title">Welcome to Xcordix</h1>
            <img src="https://i.pinimg.com/originals/d1/43/87/d14387806970f457621a91a76dc21cf4.gif" alt="" />
            <FormControl className="login__input" style={{ marginBottom: "20px" }}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>


            </FormControl>

            <FormControl style={{ marginBottom: "20px" }}>
                <InputLabel htmlFor="my-input"> Room</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>


            <FormControl style={{ marginBottom: "20px" }} >
                <Button variant="outlined" onClick={() => navigate('/room')}>Submit</Button>

            </FormControl>
            <svg style={{
                position: `relative`,
                left: '-280px'
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,192C840,171,960,181,1080,208C1200,235,1320,277,1380,298.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div >
    )
}

export default Login
