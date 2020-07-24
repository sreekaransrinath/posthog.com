import React, { Component } from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import logo from '../../images/posthog-logo-150x29.svg'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { sidebarDocked, onPostPage, sidebarHide } = this.props

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
        }}>
        {!sidebarHide && onPostPage ? (
        <div style={{height: 64, top: 0}}>{' '}</div>
        ) : (
          <Link
          id="logo"
          to="/"
          style={{
            //color: '#FFF',
            textDecoration: 'none',
            verticalAlign: 'center'
          }}
        >
          <img alt="logo" src={logo} id="logo-image" />
          
        </Link>)}
        <Menu sidebarDocked={sidebarDocked} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)
