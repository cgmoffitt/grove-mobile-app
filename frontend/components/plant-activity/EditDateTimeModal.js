import React, { useState } from "react";
import Activities from "./Activities"
import EditModal from "../utils/EditModal";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";



export default EditActivityModal = ({
    modalVisible,
    onClose,
    onSave,
    date,
    startTime,
    endTime
}) => {

    const [editDate, setEditDate] = useState(date)
    const [editStartTime, setEditStartTime] = useState(startTime)
    const [editEndTime, setEditEndTime] = useState(endTime)

    return (
        <EditModal
            modalVisible={modalVisible}
            onClose={onClose}
            onSave={() => onSave(editDate, editStartTime, editEndTime)}
            title={"Edit Date / Time"}
        >
            <DatePicker
                updateDate={(date) => setEditDate(date)}
                containerStyle={{height: "55%"}}
            />
            <TimePicker
                startTime={editStartTime}
                setStartTime={setEditStartTime}
                endTime={editEndTime}
                setEndTime={setEditEndTime}
            />
        </EditModal>

    )
}