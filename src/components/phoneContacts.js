import React from 'react';

export default class PhoneContacts extends React.Component {
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
				<button onClick={this.props.onRemove} className="contact-book-link">Delete</button>
		</div>;
  }
}; 