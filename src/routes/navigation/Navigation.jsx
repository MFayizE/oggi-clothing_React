import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.scss'
import {ReactComponent as OggiLogo} from '../../assets/crown.svg'
function Navigation() {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <OggiLogo/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/auth'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation