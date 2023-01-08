import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import EditorContainer from "../../components/EditorContainer/EditorContainer";
import styles from "./BlogContainer.module.scss";

import storedState from "./storedState.json";
import { Editor, EditorState, convertFromRaw } from "draft-js";

export const BlogContainer = (props) => {
  const [section, setSection] = useState("Crafting");
  const [test, setTest] = useState({
    blocks: [
      {
        key: "c29l8",
        text: "",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const contentState = convertFromRaw(test);
  const editorState = EditorState.createWithContent(contentState);
  return (
    <>
      <BlogTitle />
      <div className={styles.wrapper}>
        <BlogNavbar setSection={setSection} />
        {section}
        BlogContainer
        <EditorContainer
          setState={setTest}
          editorState={editorState}
          readOnly={true}
        />
        <Editor editorState={editorState} readOnly={true} />
        {/* <div>{test}</div> */}
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
