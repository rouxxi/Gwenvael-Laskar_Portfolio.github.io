import React from 'react';
import styled from 'styled-components';
import home from './img/home2.png';
import { Link, animateScroll as scroll } from 'react-scroll';


const HeadDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    height: 8vh;
    width:100vw;
    background-color: rgba(0,0,0, 0.9);
`;

const Home = styled.img`
    cursor: pointer;
    padding-left:15px;
    height:50px;
    width: 50px;
`;


const MenuNav = styled.div`
    padding: 0 30px 0 30px;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    list-style:none;
    color:white;

    ul{
        display:flex;

        li{
            cursor:pointer;
            list-style:none;
            margin: 0 10px 0 8px;
        }
    }

    @media  (min-width: 720px){
        font-size:36px;
        ul{ li{
            margin: 0 30px 0 30px;
        }
    }
    }
`;


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        return (
            <HeadDiv>
                <div>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}> <Home src={home} /></Link>
                </div>
                <MenuNav>
                    <ul>
                        <li><Link
                            activeClass="active"
                            to="Presentation"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> Presentation</Link></li>
                        <li><Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> Projects </Link></li>
                    </ul>
                </MenuNav>

            </HeadDiv>
        )
    };
}

export default Header;