import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN, TEXT_GRAY } from "../../constants/themes";
import AutoTags from 'react-native-tag-autocomplete';
import MyAutoTags from "../utils/MyAutoTags";
import { DEFAULT_ACTIVITIES } from "../../constants/defaultData";

const AddActivitiesModal = ({
    closeModal,
    preferredActivities,
    updatePreferredActivities
}) => {

    const items = DEFAULT_ACTIVITIES.map(activity => ({ label: activity.title, value: activity.title }))

    return (
        <MultipleSelectModal
            closeModal={closeModal}
            title="Select activities!"
            value={preferredActivities.map(activity => activity.name)}
            items={items}
            onSelectItem={(selected) => updatePreferredActivities(selected)}
            placeholder="Select up to 3 friends"
            multipleText={`${preferredActivities.length} activities selected`}
        />
    )
}

const ActivityChip = ({
    activity,
    removeActivity
}) => {
    return (
        <TouchableOpacity
            key={activity.name}
            style={commonStyles.darkGreenChip}
            onPress={() => removeActivity(activity)}
        >
            <Text style={styles.activityText}>
                {activity.name}
            </Text>
        </TouchableOpacity>
    )
}

export default PreferredActivities = ({
    preferredActivities,
    updatePreferredActivities,
    removeActivity
}) => {
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => setModalOpen(false)
    const openModal = () => setModalOpen(true)

    return (
        <View style={[{ width: "100%" }, commonStyles.flexCenter]}>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={modalOpen}
                onRequestClose={() => {
                    setModalOpen(false)
                }}
            >
                <AddActivitiesModal
                    closeModal={closeModal}
                    preferredActivities={preferredActivities}
                    updatePreferredActivities={updatePreferredActivities}
                />
            </Modal>

            <Text style={[styles.textHeader, { marginBottom: 10 }]}>Activities I'd particular enjoy...</Text>
            <View style={styles.activitiesSection}>
                {preferredActivities.length === 0 && <Text style={styles.textRegular}>Add an activity:</Text>}
                {preferredActivities.map((activity, index) =>
                    <ActivityChip
                        key={activity.name}
                        activity={activity}
                        removeActivity={removeActivity}
                    />
                )}
                <TouchableOpacity
                    style={[styles.plusMinusContainer, { alignSelf: "center", marginLeft: 5 }]}
                    onPress={openModal}
                >
                    <Text style={[styles.plusMinus, styles.bold]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontFamily: "OpenSans",
        fontSize: 18,
        color: DARK_GREEN
    },
    textRegular: {
        fontFamily: "OpenSans",
        fontSize: 14,
        color: "black"
    },
    activityText: {
        fontFamily: "OpenSansBold",
        fontSize: 14,
        color: "white"
    },
    activitiesSection: {
        width: "100%",
        minHeight: 50,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 20
    },
    plusMinus: {
        fontFamily: "OpenSans",
        color: DARK_GREEN,
        fontSize: 22
    },
    plusMinusContainer: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: DARK_GREEN,
        borderRadius: 10,
        width: 30,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginRight: 5
    },
});