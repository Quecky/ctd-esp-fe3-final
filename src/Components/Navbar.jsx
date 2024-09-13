
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import DarkModeBtn from './DarkModeBtn';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({state,toggleTheme}) => {
 
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.favs}><h4>Destacados</h4></Link>
   {/*  <Link to="/dentista/:id" ><h4>Detalle del dentista</h4></Link> */}
      <Link to={routes.contact}><h4>Contact</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <DarkModeBtn status={state} trigger={toggleTheme}/>
    </nav>
  )
}

export default Navbar