// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import styles from "./BlogContainer.module.scss";
import axios from "../../axios.js";



export const BlogContainer = (props) => {
  const [section, setSection] = useState("Crafting");
  const [blogs, setBlogs] = useState([])

  

  const getBlogs = async () => {
    const response = await axios.get("/blog/getAll");
    setBlogs(response.data)
  }
  useEffect(() => {
    getBlogs()
  }, [])
  
  console.log(blogs)

  return (
    <>
      <BlogTitle />

      <div className={styles.wrapper}>
        <BlogNavbar setSection={setSection} />
        {/* <BlogPost /> */}
        {section}
        <div className={styles.cardContainer} >
          {blogs.map(blog => <BlogCard key={blog.title} blog={blog}/>)}
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
