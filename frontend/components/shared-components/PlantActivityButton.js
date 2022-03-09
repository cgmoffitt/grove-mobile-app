import React from "react";
import ActionButton from "../utils/ActionButton";
import routes from "../../constants/routes";

const PlantActivityButton = ({
  navigation
}) => {
  return (
        <ActionButton 
            main="🌿  Plant an Activity  ☀️" 
            onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYA)}
            active={true}
        ></ActionButton>
  );
};

export default PlantActivityButton;