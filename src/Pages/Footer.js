import React, { Fragment } from "react";
import PropTypes from "prop-types";

const parse = require('html-react-parser');


class DivFooter extends React.Component {
    DivFooterStyle = {
        width: '100%',
        textAlign: 'justify',
        paddingLeft: '30px',
        paddingRight:'30px',
        paddingTop: '128px'
       
    } 
    render () {
        const {h3, text_up, text_down} = this.props.data
    return  (
        <div style={this.DivFooterStyle} className="footerwidget">
            <h3>{h3}</h3>
            <p>{text_up}</p>
            <p>{text_down}</p>
        </div>
        )   
    }
}
DivFooter.propTypes = {
    data: PropTypes.shape({
        h3: PropTypes.string.isRequired,
        text_up: PropTypes.string.isRequired,
        text_down: PropTypes.string.isRequired
    })
}

class Footer extends React.Component {
    FooterStyle = {
        display: 'flex',

    } 
    articals = [
        {
            h3: '', 
            text_up: '',
            text_down: ''
        },
        {
            h3: 'MARS', 
            text_up: 'We are offer secure crypto exchange and good services with Bitcoin quick and easy. Our team is providing crypto platform for your business.',
            text_down: 'Hello @2020 airi. All rights reserved.'
        },
        {
            h3: 'MARS', 
            text_up: 'We are offer secure crypto exchange and good services with Bitcoin quick and easy. Our team is providing crypto platform for your business.',
            text_down: 'Hello @2020 airi. All rights reserved.'
        },
        {
            h3: 'MARS', 
            text_up: 'We are offer secure crypto exchange and good services with Bitcoin quick and easy. Our team is providing crypto platform for your business.',
            text_down: 'Hello @2020 airi. All rights reserved.'
        },
        {
            h3: '', 
            text_up: '',
            text_down: ''
        },
    ]
    renderFooter = () => {
        let footerDiv = null
        footerDiv = this.articals.map(function (item, index) {
            return <DivFooter key={index} data={item} />
        })
        return footerDiv
    }

    render() {
        return ( <footer style={this.FooterStyle}>{this.renderFooter()}</footer>
        )
    }
}

export default Footer;