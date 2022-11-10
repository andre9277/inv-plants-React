import {Link} from "react-router-dom"
import './Navbar.css'

export const Navbar = () =>{
    return( 
        <div>
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jtzmmE08TQLtQvkowcEmj6OJ6YAAu1zS4g&usqp=CAU"/>
                <h1>Plantas Inventario</h1>
                <div className="navbar">
                    <Link to="/">Home </Link>
                    <Link to="/procurar">Procurar </Link>
                    <Link to="/contact">Contactos </Link>
                </div>
            </header>
        </div>
        
    )
}