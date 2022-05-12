import React from "react";
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <Link to='/what'> WHAT!!</Link>
            </div>
        )
    }
}

export default Profile