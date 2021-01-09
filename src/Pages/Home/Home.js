import React, { Component } from "react";
import Sections, {Aside, Article, Paragrph, ProgressBar, simpleUniqueId, Button} from "../../Pages/Content";

let first_content = [
    {
        header: 'Buy bitcoin with us',
        text:'Crypto is created for help you buy Bitcoin etc. ',
        backgroundPicture: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://crypto-live.net/wp-content/uploads/2020/05/bitcoin-3227986_1920.jpg)',
        headerStyle: {
            color: '#FFF',
            fontSize: '100px',
            fontWeight: '500',
            paddingTop:'128px',
            
        },
        paragrphStyle: {
            color: '#FFF',
            fontSize: '26px',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'inherit'
        }
    }
]; 
let style_second_content = {
    fontSize: '18px',
    fontWeight: 'normal',
    color: '#595959',
}
let second_content = [
    {
        header: 'Bank details for wire transfer',
        text: [
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Recipient: PRAETERITUM LTD</Paragrph>, 
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Recipient account (IBAN) LT71 3400 0238 1000 0067</Paragrph>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Address company: Leecroft House, 59-64 Campo Lane, Sheffield, United Kingdom, S1 2EG</Paragrph>, 
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Bank name: UAB Guru Pay,</Paragrph>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Bank address: Vivulskio 7-426, LT-03162 Vilnius, Lithuania</Paragrph>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Bank name: UAB Guru Pay,</Paragrph>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>SWIFT: GUPULT22XXX</Paragrph>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Reference: Date of transaction</Paragrph>,
        ],
        headerStyle: {
            color: '#000',
            paddingTop:'64px'
        },
        paragrphStyle: {
            textAlign: 'center'
        }
        
    },
    {
        header: 'Our work',
        // text:'',
        text: [
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Wordpress</Paragrph>, 
            <ProgressBar key={simpleUniqueId()} width_full={'400'} width_fill={'350'} ></ProgressBar>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Video</Paragrph>, 
            <ProgressBar key={simpleUniqueId()} width_full={'400'} width_fill={'355'} ></ProgressBar>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Graphic design</Paragrph>, 
            <ProgressBar key={simpleUniqueId()} width_full={'400'} width_fill={'390'} ></ProgressBar>,
            <Paragrph key={simpleUniqueId()} style={style_second_content}>Photography</Paragrph>, 
            <ProgressBar key={simpleUniqueId()} width_full={'400'} width_fill={'333'} ></ProgressBar>
        ],
        backgroundPicture: 'repeating-linear-gradient(#9AADBF, #9AADBF 100%)',
        headerStyle: {
            color: '#000'
        },
        paragrphStyle: {
            textAlign: 'center'
        }
    },
]; 
let third_content = [
    {
        header: 'Let\'s talk about your next project',
        text:[
            'Write to us and get a free consultation with a specialist',
            <Button key={simpleUniqueId()}/>
        ],
        backgroundPicture: 'repeating-linear-gradient(#DF2176, #DF2176 100%)',
        headerStyle: {
            color: '#FFF',
            fontSize: '42px',
            lineHeight: '48px',
            paddingTop:'128px', 
        },
        paragrphStyle: {
            color: '#FFF',
            fontSize: '26px',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'inherit'
        }
    },
]; 


class Home extends Component {
    render() {
        return (
            <div  id={'HomePage'} >
            <Sections articalOptions={first_content}/>
            {/* // graph  */}
            {/* // Section with redirect buttons  */}
            <Sections articalOptions={second_content}/>
            {/* // Secction with images  */}
            <Sections articalOptions={third_content}/>
            {/* // Section with redirect buttons  */}
            </div>
        );
    }   
}

export default Home;