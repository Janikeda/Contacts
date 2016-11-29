import React from 'react';
import CONTACTS from '../data/contacts';
import PhoneContacts from './phoneContacts';
import SearchContacts from './searchContacts';

export default class ContactApp extends React.Component {
  constructor(props) {
  		super(props);
  		this.state = {displayedContacts: CONTACTS};
 	}


  removeContacts(contact) {
    const newState = this.state.displayedContacts;
    if (newState.indexOf(contact) > -1) {
      newState.splice(newState.indexOf(contact), 1);
      this.setState({displayedContacts: newState})
      }
    }
  
  handlerSearch (e) {

	const searchQuery = e.target.value.toLowerCase();
	const displayedContacts = CONTACTS.filter(contact => {
            const searchString = contact.name.toLowerCase();

            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({displayedContacts});

  }

  render() {
  	const PhoneNumbers = this.state.displayedContacts.map(contact => 
  		<PhoneContacts 
  			name={contact.name}
  			key={contact.id}
  			id={contact.id}
  			phoneNumber={contact.phoneNumber}
  			image={contact.image}
        onRemove={this.removeContacts.bind(this, contact)}
  		/>);

    return <div className="app">
				<div className="header">Contacts</div>
				<SearchContacts onSearch={this.handlerSearch.bind(this)}/>
				<div className="contacts-list">{PhoneNumbers}</div>


			</div>;
  }
};

