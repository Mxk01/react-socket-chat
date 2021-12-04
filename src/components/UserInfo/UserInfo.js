import React from 'react'
import './UserInfo.css';
function UserInfo({ username, url, description }) {
    return (
        <div className="user__info">
            <div className="user__container">

                <div className="user__main">
                    <img className="user__avatar" src={url} alt={''} />
                    <div className="user__status"> </div>
                </div>


                <div className="user__text">
                    <h3>{username}</h3>
                    <p>{description}</p>
                </div>



            </div>
        </div>
    )
}

export default UserInfo
