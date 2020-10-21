import React from 'react'
import { Link } from '@reach/router'

const Header = () => {
    return (
        <Link to='/'>
            <h1><span role='img' aria-label='newspaper'>📰</span>Northcoders News<span role='img' aria-label='newspaper'>📰</span></h1>
        </Link>
    )
}





export default Header;