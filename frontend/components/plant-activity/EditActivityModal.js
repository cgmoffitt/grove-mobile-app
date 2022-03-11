import React, { useState } from "react";
import Activities from "./Activities"
import EditModal from "../utils/EditModal";



export default EditActivityModal = ({
    modalVisible,
    onClose,
    onSave,
    selected,
}) => {

    const [editSelected, setEditSelected] = useState(selected)

    const onChooseActivity = (activity) => {
        if (editSelected === activity.title) {
            setEditSelected("")
        } else {
            setEditSelected(activity.title)
        }
    }

    return (
        <EditModal
            modalVisible={modalVisible}
            onClose={onClose}
            onSave={() => onSave(editSelected)}
            title={"Edit Activity"}
        >
            <Activities
                selected={editSelected}
                onChooseActivity={onChooseActivity}
                containerStyle={{marginTop:40}}
            />
        </EditModal>
    )
}