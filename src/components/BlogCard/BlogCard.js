import PropTypes from 'prop-types';
import { memo } from 'react';
import { connect } from 'react-redux';
import styles from './BlogCard.module.scss';
import { Link } from 'react-router-dom';

export const BlogCard = ({blog}) => {
  const date = (new Date(blog.created)).toDateString();

  return (
    <Link to={`/blog:${blog._id}`}>
      <div className={styles.card} > 
        <div className={styles.upperPart} >
          <div className={styles.title} >
            {blog.title}
          </div>
          <span className={styles.date} >{date}</span>
        </div>
        <div className={styles.downPart}>
          <span className={styles.section} >{blog.section}</span>
        </div>
      </div>
    </Link>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.object
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(memo(BlogCard))