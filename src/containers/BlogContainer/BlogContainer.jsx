import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import BlogPost from "../../components/BlogPost/BlogPost";
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import styles from "./BlogContainer.module.scss";


export const BlogContainer = (props) => {
  const [section, setSection] = useState("Crafting");
  return (
    <>
      <BlogTitle />
      <div className={styles.wrapper}>
        <BlogNavbar setSection={setSection} />
        {/* {section} */}
        {/* BlogContainer */}
        {/* <BlogPost /> */}
        <div className={styles.cardContainer} >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

// BlogContainer.propTypes = {
//   second: PropTypes.third
// }

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
