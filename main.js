const CONTACTS = [
		{
			id: 'id6820075',
			name: 'Yulia Tikhonova',
			phoneNumber: 555777,
			image: 'img/1.jpg'
		},
		{
			id: 'dmitrienko.kseni',
			name: 'Ksenia Dmitrienko',
			phoneNumber: 666877,
			image: 'img/2.jpg'
		},
		{
			id: 'e.beloglazova',
			name: 'Lena Beloglazova',
			phoneNumber: 111479,
			image: 'img/3.jpg'
		},
		{
			id: 'hellboy999',
			name: 'Andrei Sukhonosov',
			phoneNumber: 335877,
			image: 'img/4.jpg'
		},
		{
			id: 'gaynitdinov',
			name: 'Timur Gainitdinov',
			phoneNumber: 999999,
			image: 'img/5.jpg'
		}
]

class PhoneContacts extends React.Component {
  render() {

  const {id, name, phoneNumber, image} = this.props;
  
    return <div className="contact-card">
				<div className="contact-body"><h3 className="contact-title">{name}</h3></div>
				<img className="contact-image" src={image} />
				<p className="contact-description">Phone number: {phoneNumber}</p>
					<div className="contact-book"> 
							<a
		                        href={`https://www.vk.com/${id}`}
		                        target="_blank"
		                        className="contact-book-link"
		                    >
		                        VKontakte!
		                    </a>
					</div>
		</div>;
  }
}; 


const SearchContacts = React.createClass({
    render() {
        return (
            <div className="search-bar">
                <i className="search-icon fa fa-search" />

                <input
                    className="search-input"
                    type="text"
                    placeholder="Look for a contact"
                    onChange={this.props.onSearch}
                />
            </div>
        );
    }
})



class ContactApp extends React.Component {
  constructor(props) {
  		super(props);
  		this.state = {displayedContacts: CONTACTS};
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

  		/>);

    return <div className="app">
				<div className="header">Contacts</div>
				<SearchContacts onSearch={this.handlerSearch.bind(this)}/>
				<div className="contacts-list">{PhoneNumbers}</div>

			</div>;
  }
};




ReactDOM.render(
    <ContactApp />,
    document.getElementById('root')
);