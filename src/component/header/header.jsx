import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

function Header({ onsearch, ip, setIP }) {


    return (
        <div className='header'>
            <div className="menu">
                <div className='text'>
                    <h1>Movie</h1>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <input
                        onChange={(e) => setIP(e.target.value)}
                        type="text" placeholder='Tìm kiếm'
                        value={ip} />
                    <button onClick={onsearch}>Search</button>
                </div>

            </div>

        </div>
    )
}

export default Header