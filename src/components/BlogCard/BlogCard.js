import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import styles from './BlogCard.module.scss';

export const BlogCard = (props) => {
  return (
    <div className={styles.card} > 
      
    </div>
  )
}

// BlogCard.propTypes = {
//   second: PropTypes.third
// }

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlogCard)