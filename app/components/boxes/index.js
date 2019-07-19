import React from "react";
import { TouchableOpacity } from "react-native";
import { BoxContainer, Box } from "./style";

const handleNavigationPath = active => {
  if (active === 1) {
    return false;
  } else if (active === 2) {
    this.props.navigation.navigate("ReviewBook");
  } else {
    return false;
  }
};

const Boxes = props => {
  let activeStyle;

  return (
    <>
      {props.boxesArr.map((box, index) => {
        if (props.active === box) {
          activeStyle = "active";
        }
        return (
          <BoxContainer key={index}>
            <TouchableOpacity
              style={{ cursor: "pointer" }}
              onPress={() => handleNavigationPath(box)}
            >
              <Box id={activeStyle} />
            </TouchableOpacity>
          </BoxContainer>
        );
      })}
    </>
  );
};

export default Boxes;
