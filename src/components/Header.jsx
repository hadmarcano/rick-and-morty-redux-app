import React from "react";
import { Link } from "react-router-dom";
/* El código comentado hace referencia a otra alternativa de 
acceder a nuestras propiedades y estados iniciales definidos
en nuestro STORE inicial mediante HOC */
import { useSelector, useDispatch } from "react-redux";
// import { connect } from 'react-redux'
import { setSection } from "../actions/index";
import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/images/logo.png";

const Header = () => {
  // const Header = (props) => {

  //     const { sectionActive } = props;

  //     const handleSetSection = (section) => {
  //         props.setSection(section);
  //     }

  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <header className="header">
      <figure className="header__logo">
        <img
          className="header__logo-img"
          src={Logo}
          alt="Rick and Morty Logo"
        />
      </figure>
      <nav className="header__nav">
        <ul className="header__nav__options">
          <li
            onClick={() => handleSetSection("Characters")}
            className={`header__nav__options-item ${
              sectionActive === "Characters" ? "active" : ""
            }`}
          >
            <Link to="/">Characters</Link>
          </li>
          <li
            onClick={() => handleSetSection("favorites")}
            className={`header__nav__options-item ${
              sectionActive === "favorites" ? "active" : ""
            }`}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// const mapStateToProps = (state)=>{
//     return {
//         sectionActive: state.sectionActive,
//     }
// };

// const mapDispatchToProps = {
//     setSection,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
