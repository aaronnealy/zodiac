import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
    render(){
        return(
                <nav className="navbar">
                    <ul>
                        <li><button> Aries </button></li>
                        <li><button> Taurus </button></li>
                        <li><button> Gemini </button></li>
                        <li><button> Cancer </button></li>
                        <li><button> Leo </button></li>
                        <li><button> Virgo </button></li>
                        <li><button> Libra </button></li>
                        <li><button> Scorpio </button></li>
                        <li><button> Sagittarius </button></li>
                        <li><button> Capicorn </button></li>
                        <li><button> Aquarius </button></li>
                        <li><button> Pices </button></li>
                    </ul>
                </nav>
        )
    }
};

export default Nav

