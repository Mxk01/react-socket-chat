import React from 'react'
import './SideBar.css'
import UserInfo from '../UserInfo/UserInfo';
import { users } from '../../users';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'


function Sidebar() {
    console.log(users);
    let navigate = useNavigate();
    return (
        <div className="sidebar__container">
            <p>Search for username :  </p>
            <input type="text"
                spellCheck={false}
                className="sidebar__input"
            />
            {
                users.map((user) => (
                    <UserInfo key={user.id} {...user} />
                ))
            }
            <div className="sidebar__options">
                <LogoutIcon onClick={() => navigate('/')} />
            </div>
        </div>
    )
}

export default Sidebar
