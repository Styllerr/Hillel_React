import React, { Component } from 'react'

export default class ContactItem extends Component {
    render() {
        const styleTableCell = {
            border: "1px solid black",
            padding: "10px"
        }
        return (
            <>
                <td style={styleTableCell}>{this.props.contact.firstName}</td>
                <td style={styleTableCell}>{this.props.contact.secondName}</td>
                <td style={styleTableCell}>+{this.props.contact.phoneNomber}</td>
                <td style={{textAlign: "center"}}><div>X</div></td>
            </>
        )
    }
}
