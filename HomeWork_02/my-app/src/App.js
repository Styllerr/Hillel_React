import React, { Component } from 'react'
import Contacts from './Contacts/Contacts'

export default class App extends Component {
  render() {
    return (
      <>
        <h1>My contacts</h1>
        <Contacts />
      </>
    )
  }
}
