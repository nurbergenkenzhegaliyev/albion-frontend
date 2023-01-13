import styles from "./BlogPostContainer.module.scss";
import { useParams } from "react-router-dom";
import EditorContainer from "../../components/EditorContainer/EditorContainer";
import { EditorState, convertFromRaw } from "draft-js";
import { useState, useEffect, memo } from "react";
import axios from "../../axios.js";

const temp = {
  title: "empty",
  section: "empty",
  text: {
    blocks: [
      {
        key: "8i090",
        text: "Hello CodePulse!",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 16,
            style: "BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "42ncd",
        text: "This text should be underlined.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 31,
            style: "UNDERLINE",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "327r6",
        text: "And this text should be italic.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 31,
            style: "ITALIC",
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  created: "empty",
};

function BlogPostContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(temp);
  const params = useParams();
  const blogID = params.id.slice(1);

  var editorState = EditorState.createWithContent(convertFromRaw(post.text));

  const getBlog = async (id) => {
    let response = await axios.post(
      "/blog/getBlog",
      {
        blogId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let dd = await response.data;
    setPost(dd);
    setIsLoading(false);
  };
  editorState = EditorState.createWithContent(convertFromRaw(post.text));

  useEffect(() => {
    getBlog(blogID);
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.main}>
      <EditorContainer editorState={editorState} read={true} />
    </div>
  );
}

export default memo(BlogPostContainer);
