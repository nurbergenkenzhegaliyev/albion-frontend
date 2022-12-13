import React from "react";
import styles from "./Dropdown.module.scss";
import {AppContext} from "../../context.js";

const moveDrop = (arr) => {
  return (-arr.length / 2) * 90 + 45;
};

function Dropdown({ imgLinkArray, type, imgLinkObj }) {
  const [isShown, setIsShown] = React.useState(false);

  let { makerType, setMakerType } = React.useContext(AppContext);
  let { itemType, setItemType } = React.useContext(AppContext);
  let { itemName, setItemName } = React.useContext(AppContext);

  const onClickMaker = (img) => {
    setMakerType(img);
    setItemType({ url: "none", name: "none" });
    setItemName({ url: "none", name: "none" });
  };
  const onClickItemType = (img) => {
    setItemType(img);
    setItemName({ url: "none", name: "none" });
  };

  return (
    <>
      {type.includes("maker") ? (
        <div className={styles.dropdown}>
          <img
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={
              makerType.name.includes("none")
                ? "/img/choose.svg"
                : makerType.url
            }
            alt="choose"
          />
          {isShown && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              style={{ position: "absolute", left: moveDrop(imgLinkArray) }}
              className={styles.drop}
            >
              {imgLinkArray.map((img, index) => (
                <img
                  onClick={() => onClickMaker(img)}
                  style={
                    makerType.name.includes(img.name)
                      ? { backgroundColor: "#FFF" }
                      : {}
                  }
                  key={index}
                  src={img.url}
                  alt={img.name}
                />
              ))}
            </div>
          )}
        </div>
      ) : type.includes("item") ? (
        <div className={styles.dropdown}>
          <img
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={
              itemType.name.includes("none") ? "/img/choose.svg" : itemType.url
            }
            alt="choose"
          />
          {isShown && !makerType.name.includes("none") && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              style={{
                position: "absolute",
                left: moveDrop(imgLinkObj[makerType.name]),
              }}
              className={styles.drop}
            >
              {imgLinkObj[makerType.name].map((img, index) => (
                <img
                  onClick={() => onClickItemType(img)}
                  style={
                    itemType.name === img.name
                      ? { backgroundColor: "#FFF" }
                      : {}
                  }
                  key={index}
                  src={img.url}
                  alt={img.name}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.dropdown}>
          <img
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={itemName.name === "none" ? "/img/choose.svg" : itemName.url}
            alt="choose"
          />
          {isShown && !itemType.name.includes("none") && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              style={{
                position: "absolute",
                left: moveDrop(imgLinkObj[itemType.name]),
              }}
              className={styles.drop}
            >
              {imgLinkObj[itemType.name].map((img, index) => (
                <img
                  onClick={() => setItemName(img)}
                  style={
                    itemName.name === img.name
                      ? { backgroundColor: "#FFF" }
                      : {}
                  }
                  key={index}
                  src={img.url}
                  alt={img.name}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Dropdown;
