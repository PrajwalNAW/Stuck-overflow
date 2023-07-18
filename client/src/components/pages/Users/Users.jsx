import React from 'react'
import "./Users.css"
import LeftSidebar from '../../LeftSidebar/LeftSidebar'

import UsersList from './UsersList'

const Users = () => {

    return (
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
            <h1 className='users-h1'>Users</h1>
                  <UsersList />
            </div>
        </div>
    )
}

export default Users