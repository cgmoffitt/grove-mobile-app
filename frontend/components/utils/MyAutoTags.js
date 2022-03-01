    import React, { useState } from "react";
    import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
    import commonStyles from "../../styles/commonStyles"
    import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN, TEXT_GRAY } from "../../constants/themes";

    export default MyAutoTags = ({
        suggestions,
        tagsSelected,
        handleAddition,
        handleDelete,
        placeholder,
        tagStyles,
        style,
        renderTags,
        tagLabel
    }) => {

        const [input, setInput] = useState("")
        const [toSuggest, setToSuggest] = useState([])

        const onInput = (text) => {
            setInput(text)
            const lowerText = text.toLowerCase()
            if (lowerText !== "") {
                const nextToSuggest = suggestions.filter(suggestion => suggestion.name.toLowerCase().startsWith(lowerText))
                setToSuggest(nextToSuggest)
            } else {
                setToSuggest([])
            }
        }

        const onPressSuggestion = (suggestion) => {
            handleAddition(suggestion)
            setToSuggest([])
            setInput("")
        }

        return (
            <View style={{ width: "100%", height: 150 }}>
                <View style={styles.tagSection}>
                    <Text style={styles.tagLabel}>{tagLabel}:</Text>
                    {tagsSelected.map((tag, index) =>
                        <TouchableOpacity
                            key={tag.name}
                            style={styles.chip}
                            onPress={() => handleDelete(tag)}
                        >
                            <Text style={styles.textRegular}>
                                {tag.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    onChangeText={onInput}
                    value={input}
                />
                {toSuggest.map(suggestion =>
                    <TouchableOpacity
                        style={styles.suggestionBox}
                        onPress={() => onPressSuggestion(suggestion)}
                    >
                        <Text style={styles.suggestionText}>{suggestion.name}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    const styles = StyleSheet.create({
        textInput: {
            width: "100%",
            height: 20,
            fontFamily: "OpenSans",
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "gray"
        },
        tagSection: {
            width: "100%",
            minHeight: 50,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 20
        },
        suggestionText: {
            fontFamily: "OpenSans",
            fontSize: 14,
            paddingHorizontal: 5,
            paddingVertical: 2
        },
        suggestionBox: {
            borderWidth: 1,
            borderColor: "black"
        },
        tagLabel: {
            fontFamily: "OpenSans",
            fontSize: 14
        },
        chip: {
            backgroundColor: LIGHT_GREEN,
            marginLeft: 5,
            borderRadius: 20,
            padding: 10
        },
        textRegular: {
            fontFamily: "OpenSansBold",
            fontSize: 14,
            color: "white"
        }
    });