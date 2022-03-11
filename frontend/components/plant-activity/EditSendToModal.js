import React, { useState } from "react";
import Activities from "./Activities"
import EditModal from "../utils/EditModal";
import SelectFriends from "./SelectFriends";



export default EditSendToModal = ({
    modalVisible,
    onClose,
    onSave,
    friendsToReceive,
    setFriendsToReceive,
    removeFriend
}) => {


    return (
        <EditModal
            modalVisible={modalVisible}
            onClose={onClose}
            onSave={() => onSave(friendsToReceive)}
            title={"Edit Friends"}
            saveActive={friendsToReceive.length > 0}
        >
            <SelectFriends
                friendsToReceive={friendsToReceive}
                setFriendsToReceive={setFriendsToReceive}
                removeFriend={removeFriend}
            />
        </EditModal>
    )
}