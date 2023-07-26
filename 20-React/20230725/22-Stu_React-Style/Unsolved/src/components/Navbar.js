import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

const styles ={
  navbar: {
  background: '#6a1b9a',
  height: '60'
},

a: {
  color: 'white',
  fontSize: '1.3rem',
  textDecoration: 'none',
  margin: 5,
  lineHeight: 3,
}
};
function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.navbar}>
      <a style={styles.a} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
