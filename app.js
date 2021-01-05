class HeaderIco extends React.Component {
    render() {
        return (
            <div className="logo">
                <img width="64" height="64" src="https://crypto-live.net/wp-content/uploads/2020/09/cropped-planet-1-1.png" className="custom-logo" alt="crypto-live.net – Buy Bitcoin all over the world easy and streamlined way"></img>
            </div>
        )
    }
}

class HeaderMenuLi extends React.Component {
    render() {
        const { menuName, menuLink} = this.props.data
        /* menuLink -define for future */ 
        return (
                <li>{menuName}</li>
        )
    }
}

HeaderMenuLi.propTypes = {
    data: PropTypes.shape({
        menuName: PropTypes.string.isRequired,
        menuLink: PropTypes.string.isRequired,
    })
}

class HeaderMenu extends React.Component {
    options = [
        {
            menuName: 'Name', 
            menuLink: ''
        },
        {
            menuName: 'Name1', 
            menuLink: ''
        }
    ]
    renderMenu = () => {
        let menuLi = null
        menuLi = this.options.map(function (item, index) {
            return <HeaderMenuLi key={index} data={item} />
        })
        return menuLi
    }
    
    render() {
        return (
            <nav>
                <ul>
                {this.renderMenu()}
                </ul>
            </nav>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderIco />
                <HeaderMenu />
            </header>
        )
    }
}

class DivFooter extends React.Component {
    render () {
        const {h3, text, html} = this.props.data
    return  (
        <div>
            <h3>{h3}</h3>
            <p>{text}</p>
            {html}
        </div>
        )
    }
}
DivFooter.propTypes = {
    data: PropTypes.shape({
        h3: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        html: PropTypes.string.isRequired
    })
}

class Footer extends React.Component {
    articals = [
        {
            h3: 'Footer ', 
            text: 'Hey there',
            html: 'Hello world'
        }
    ]
    renderFooter = () => {
        let footerDiv = null
        footerDiv = this.articals.map(function (item, index) {
            return <DivFooter key={index} data={item} />
        })
        return footerDiv
    }

    render() {
        return ( <footer>{this.renderFooter()}</footer>
        )
    }
}

class Aside extends React.Component {
    render() {
        return (<aside></aside>
        )
    }
}

class Article extends React.Component {
    singl_article = {
        header: 'Byu bitcoin with us',
        text: 'Crypto is created for help you buy Bitcoin etc. ', 
        html: '', /* as example */
    }

    render() {
        const { header, text, html } = this.singl_article
        return ( 
            <article>
                <h2>{header}</h2>
                <p>{text}</p>
                {html}
            </article>
            )
        }
}

Article.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        html: PropTypes.string.optionalString 
    })
}

class Section extends React.Component {
    render() {
        return ( 
            <section>
                <Article />
            </section>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Section />
                <Aside />
                <Footer />
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('viewport')
);