import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {

    const { value, setValue } = useContext(UserContext)
    
    const logout = () => {
        alert("You Logged out")
        localStorage.removeItem("user");
        setValue(null)
    }

    return (
        <div className="navbar">
            <NavLink to='/' exact className="nav-link" activeClassName="active">Home</NavLink>

            {!value ? <NavLink to='registercomponent' className="nav-link" activeClassName="active">Register</NavLink>
                : null}
            <NavLink to='customcard' className="nav-link" activeClassName="active">Custom Card</NavLink>
            <NavLink to='clickercard' className="nav-link" activeClassName="active">Clicker Card</NavLink>
            <NavLink to='components' className="nav-link" activeClassName="active">Components</NavLink>

            {value ? <NavLink to='cabinet' className="nav-link" activeClassName="active">Cabinet</NavLink> : null}



            {value ? <button onClick={logout} className="btn btn-sm btn-warning">Logout</button>
                : null}
        </div>
    )
}

export default Nav;