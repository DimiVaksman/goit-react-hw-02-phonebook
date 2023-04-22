import { Component } from "react";

export class ContactsArray extends Component{
    render(){

        return(
            <div>{this.props.item.contacts}</div>
        )
    }
}