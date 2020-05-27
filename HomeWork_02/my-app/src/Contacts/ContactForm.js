import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <>
               <form>
               <div>
               <label><input type="text" name="firstName"/>Name</label>
               <label><input type="text" name="secondName"/>Second Name</label>
               <label><input type="tel" name="phoneNomber"/>Phone nomber</label>
               </div>
               <div>
                   <button>Add</button>
                   <input type="reset" value="Cancel"/>
               </div>
               </form>
            </>
        )
    }
}
