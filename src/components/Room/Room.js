import { useState, useEffect, useRef } from 'react'
import './Room.css'
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import io from "socket.io-client";
const useStyles = makeStyles({
    icons: {
        color: `rgb(71, 71, 200) !important`
    }
});



function Room() {
    const socket = io.connect("http://localhost:5000");
    let myMessage = useRef();

    // socket.on('connected', (message) => {
    //     console.log(message + socket.id);
    // })




    const classes = useStyles();
    let [message, setMessage] = useState('');
    let [messages, setMessages] = useState([]);
    let [disabled, setDisabled] = useState(false);
    let key = 0;

    // whenever messages array changes
    useEffect(() => {
        // this triggers
        socket.on("msg", (msg) => {
            setMessages([...messages, msg]);
        });
        return () => {
            // turns off event
            socket.off('msg')
        }
    }, [messages]);



    return (
        <div className="room__container">
            <div className="myuser__info">

                <img className="user__avatar" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>


                <div className="user__details" style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Girl</p>
                    <p style={{ marginTop: 0 }}>Last seen 3 hours ago</p>
                </div>


                <div className="icons__container">
                    <LocalPhoneIcon className={classes.icons} />
                    <VideocamIcon className={classes.icons} />
                    <InfoIcon className={classes.icons} />
                </div>



            </div>

            <div className="chat__display">


                {

                    messages.map((msg) => (
                        <div className="user__message" key={key++}>
                            <p>{msg}</p>
                        </div>
                    ))
                }



            </div>
            <div className="chat__send">
                <TextField id="standard-basic"
                    style={{ width: '70vw', marginTop: '5px' }}
                    label="Send a message to your friends" variant="standard"
                    value={message}
                    spellCheck={false}
                    disabled={disabled}
                    ref={myMessage}
                    onChange={(e) => {
                        // setMessage(e.target.value)
                        setMessage(e.target.value)
                        // // updating messages array
                        // setMessages([...messages, message]);

                    }}
                />

                <Button variant="outlined" style={{ marginTop: '1.2rem', marginLeft: '3px' }} size="medium"
                    onClick={() => {
                        socket.emit('send-message', message)
                        // updating messages array
                        setMessages([...messages, message]);

                        setMessage('')
                        myMessage.current.focus()
                    }}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Room
