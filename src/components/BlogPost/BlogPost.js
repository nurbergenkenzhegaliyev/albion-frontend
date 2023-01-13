// import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import EditorContainer from "../../components/EditorContainer/EditorContainer";

import storedState from "./storedState.json";
import { EditorState, convertFromRaw } from "draft-js";
import styles from './BlogPost.module.scss';

export const BlogPost = (props) => {
  const [read, setRead] = useState(false);

  const contentState = convertFromRaw(storedState);
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div className={styles.wrapper} >
        <div className={styles.postBox} >
            <EditorContainer
                editorState={editorState}
                read={read}
            />
        </div>
        <button onClick={() => setRead(!read)}>{read ? "Edit" : "Save"}</button>
    </div>
  );
};

// BlogPost.propTypes = {
//   second: PropTypes.third
// }

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
