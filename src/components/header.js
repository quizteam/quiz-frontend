import React from 'react';

class Header extends React.Component {
    render() {
        return (<h1 style = {styles.header}>The Tech Returners Quiz!</h1>)
    }
};
//commenting this out for now until we have decided on styles
const styles = {
    header : {
        textAlign: "center",
        color: "#6f42C1",
        fontSize: 60


    }
}

export default Header; 