import React from 'react'
import Room from '../Room/Room';
import Sidebar from '../SideBar/SideBar';
function Container() {
    return (

        <div className="chat__container">
            <Sidebar />
            <Room />
        </div>

    )
}

export default Container
