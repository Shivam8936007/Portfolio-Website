import React from 'react';

function Header (){
    return(
        <div style={headerStyle}>
            <nav>
                <div className="logo" style={logo}>Shivam</div>
                <ul style={navStyle}>
                    <li><a href="#" style={linkStyle}>Home</a></li>
                    <li><a href="#" style={linkStyle}>About</a></li>
                    <li><a href="#" style={linkStyle}>Skills</a></li>
                    <li><a href="#" style={linkStyle}>Services</a></li>
                    <li><a href="#" style={linkStyle}>Portfolio</a></li>
                    <li><a href="#" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    
};

const navStyle = {
    listStyle: 'none',
    display: 'flex',
    marginLeft: '64rem', // Aligning ul to the right
    justifyContent:'space-between',
    marginBottom:'5rem'
};

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '1rem',
    marginBottom:'2rem',
};

const logo = {
    fontSize: '2rem' ,// Adjust the font size as needed
    marginLeft:'40px',
}
export default Header;
