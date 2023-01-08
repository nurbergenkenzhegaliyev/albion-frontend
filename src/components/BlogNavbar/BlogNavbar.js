import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./BlogNavbar.module.scss";

export const BlogNavbar = ({ setSection }) => {
  const handleClick = (name) => {
    setSection(name);
  };

  return (
    <nav className={styles.wrapper}>
      <ul>
        <li onClick={(e) => handleClick(e.target.innerText)}>Crafting</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>Calculations</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>Gathering</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>PVP</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>PVE</li>
      </ul>
    </nav> 
  );
};

BlogNavbar.propTypes = {
  setSection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogNavbar);
