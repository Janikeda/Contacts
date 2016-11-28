import React from 'react';

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
});

export default SearchContacts;





// export default class SearchContacts extends React.Component {
//   render() {
//         return 
//             <div className="search-bar">
//                 <i className="search-icon fa fa-search" />

//                 <input
//                     className="search-input"
//                     type="text"
//                     placeholder="Look for a contact"
//                     onChange={this.props.onSearch}
//                 />
//             </div>
//   }
// }; 

