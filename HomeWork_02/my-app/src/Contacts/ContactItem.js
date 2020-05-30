import React, { Component } from 'react'

export default class ContactItem extends Component {
    deleteContact = () => {
        this.props.del(this.props.contact.id)
    }
    render() {
        const styleTableCell = {
            border: "1px solid black",
            padding: "10px"
        }
        const styleDelButton = {
            width: "40px",
            height: "20px",
            textAlign: "center",
            border: "1px solid red",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "red",
            cursor: "pointer"
        }
        return (
            <>
                <td style={styleTableCell}>{this.props.contact.firstName}</td>
                <td style={styleTableCell}>{this.props.contact.secondName}</td>
                <td style={styleTableCell}>+{this.props.contact.phonenumber}</td>
                <td style={{ paddingLeft: "10px" }}>
                    <div
                        style={styleDelButton}
                        onClick={this.deleteContact}
                    >X</div>
                </td>
            </>
        )
    }
}
