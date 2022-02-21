import React from "react";
import ActionButton from "../utils/ActionButton";

const PlantActivityButton = ({
  navigation
}) => {
  return (
        <ActionButton main="🌿  Plant an Activity  ☀️" onPressMethod={() => navigation.navigate("PlantActivity")}
        ></ActionButton>
  );
};

export default PlantActivityButton;