import React from 'react';

class NavBar extends React.Component {  

    constructor(props) {
        super(props); // <--- where the components in the are coming in to
        // constructor logic
        console.log('NavBar props:', props);
    }

    componentDidMount() {
        // fetch posts
        console.log('NavBar component mounted');
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>   
                    <li><a href="/api">API Docs</a></li>
                    <li><span> {this.props.username} </span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul> 
            </nav>       
        );
    }
}

export default NavBar;