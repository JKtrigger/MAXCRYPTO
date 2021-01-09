import React from "react";
import PropTypes from "prop-types";
import { bold } from "chalk";


function gen4() {
    return Math.random().toString(16).slice(-4)
  }
  
export function simpleUniqueId(prefix) { // todo replace to utils 
    return (prefix || '').concat([
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4()
    ].join(''))
  }


{/*Todo povide styles fot Aside */}
class Aside extends React.Component {
    render() {
        return (<aside></aside>
        )
    }
}

class Button extends React.Component {
    buttonStyle = {
            display: 'block',
            backgroundColor: '#E3F0E4',
            border: 'none',
            color: '#913131',
            padding:'15px 32px',
            textAlign: 'center',
            textDecoration:'none',
            display: 'block',
            fontSize: '16px',
            margin:'30px auto',
            borderRadius: '30px',
            cursor: 'pointer'
        }
    
    render() {
        return (<button style={this.buttonStyle}>Get a quote</button>)}
    }

class Article extends React.Component {
    articleStyle = {
        backgroundImage: this.props.options.backgroundPicture,
        width: '100%',
        backgroundPosition: 'center center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
        minHeight: '600px',
    }
    headerStyle = {...this.props.options.headerStyle}
    paragrphStyle = {...this.props.options.paragrphStyle}
    render() {
        console.log(this.articleStyle)
        const { header, text, backgroundPicture, animate } = this.props.options
        return ( 
            <article style={this.articleStyle}> 
                <h2 style={this.headerStyle}>{header}</h2>
                <span style={this.paragrphStyle} >{text}</span>
                {/* <div>{animate}</div> */}
            </article>
            )
        }
}

Article.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        backgroundPicture: PropTypes.string.isRequired
    })
}

class Sections extends React.Component {
    articalOptions = this.props.articalOptions;
    // asideOptions = this.props.asideOptions; TODO implement this in future
    renderSections = () => {
        let sections = null; 
        sections = this.articalOptions.map(function (item) {
            return (
            <section key={simpleUniqueId('')}>
                <Article key={simpleUniqueId('')} options={item}/>
                <Aside key={simpleUniqueId('')}/>
            </section>
            )
        })
        return sections
    }

    render() {
        return (this.renderSections())
    }
}

class Paragrph extends React.Component {
    paragrphStyle = this.props.style
    render() {
        return (<p style={this.paragrphStyle}>{this.props.children}</p>)
    }
}

export var ProgressBar =  ({width_full, width_fill}) => {
    let w_full = width_full + 'px';
    let w_fill = width_fill + 'px';
   
    const progressDivStyle = {
        backgroundColor: 'rgb(233, 233, 233)',
        borderRadius: '.5rem',
        width: w_full,
        margin: '20px auto',
        // paddingTop: '50px',
        // paddingBottom: '50px'
    }
    
    const progressStyle = {
        backgroundColor: 'rgb(62, 122, 235)',
        height: '20px', 
        borderRadius: '1rem',
        width:w_fill,
        transition: '1s ease',
        transitionDelay: '0.5s'
    }
    // todo - add animation

    return (
      <div className="progress-div" style={progressDivStyle}>
           <div style={progressStyle}className="progress"/>
      </div>
    )
}


export default Sections; 
export {Aside, Article, Paragrph, Button}; 