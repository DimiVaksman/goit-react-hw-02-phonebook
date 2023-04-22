import React, { Component } from 'react';
import { Phonebook } from "./Phonebook/Phonebook";
import {Contacts} from './Contacts/Contacts'


export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  addCotact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  render() {
    return (
      <div>
    <Phonebook title='Phonebook' onSave={this.addCotact} />
    <Contacts items={this.state.contacts} title='Contacts'/>
      </div>

  
    );
  }
}
