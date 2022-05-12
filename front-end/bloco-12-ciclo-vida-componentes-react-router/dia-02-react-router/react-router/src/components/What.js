import React from "react";

class What extends React.Component {
    render() {
        const {name} = this.props.match.params
        return (
            <div>
                <h1>{this.props.name} {name}</h1>
            </div>
        )
    }
}

export default What