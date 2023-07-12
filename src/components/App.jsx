import { Component } from 'react';
import Container from './Container/Container';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    this.setState({contacts:parsedContacts})
  }

  componentDidUpdate(_, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length){
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
    const checkLocal = JSON.parse(localStorage.getItem('contacts'));
    console.log(checkLocal);    
    if(!(checkLocal&&checkLocal.length)){
      localStorage.removeItem('contacts');
    }    
  }

  formAddContact = contactData => {
    const contact = { id: nanoid(), ...contactData };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleOnChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });    
  };
  getFilteredContact =()=>{
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  onRemoveContact = contactId => {
    this.setState({      
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  
  render() {
    
    const filteredContact = this.getFilteredContact();
    return (
      <>
        <Container
          formAddContact={this.formAddContact}
          value={this.state.filter}
          handleOnChangeFilter={this.handleOnChangeFilter}
          filteredContact={filteredContact}
          contactsArr = {this.state.contacts}
          onRemoveContact={this.onRemoveContact}
        />        
      </>
    );
  }
}
