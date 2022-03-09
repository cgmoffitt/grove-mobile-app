import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN, LIGHT_RED, TEXT_GRAY } from '../../constants/themes'

const DAY_MAP = {
    1: "Mon",
    2: "Tues",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
    7: "Sun"
}

const Square = ({
    row,
    col,
    available,
    updateAvailability
}) => {

    const hour = ((row + 7) % 12) === 0 ? 12 : (row + 7) % 12
    const segment = row < 5 ? "am" : "pm"

    const [free, setFree] = useState(available)

    return (
        <Pressable
            style={[
                styles.square,
                { backgroundColor: "green" },
                free ? styles.available : styles.unavailable,
                (row === 0 || col === 0) ? commonStyles.backgroundCreme : {}

            ]}
            onPress={() => {
                updateAvailability(row,col)
                setFree(!free)
            }}
        >
            {(row === 0 && col === 0)
                ? <Text></Text>
                : row === 0
                    ?
                    <Text style={{textAlign: "center"}}>{DAY_MAP[col]}</Text>
                    :
                    col === 0
                        ?
                        <Text>{hour}{segment}</Text>
                        :
                        <Text></Text>
            }
        </Pressable>
    )
}

export default AvailabilityCard = ({
    availability,
    setAvailability
}) => {

    const updateAvailability = (row, col) => {
        availability[row][col] = !availability[row][col]
        setAvailability(availability)
    }

    return (
        <View
            style={[commonStyles.cremeCard, { marginVertical: 30, width: "90%" }]}
        >
            <Text style={[styles.headerText, {marginBottom: 15}]}>
                My Availability
            </Text>
            <Text style={[styles.headerText, {marginBottom: 15, fontSize: 15, fontFamily: "OpenSansItalic", color: "black"}]}>
                Click and drag to select your availability.
            </Text>
            
            <View>
                {availability.map((_, row) =>

                    <View style={{ flexDirection: "row" }}>
                        {
                            availability[0].map((_, col) => {
                                return <Square 
                                    key={row+","+col} 
                                    row={row} col={col} 
                                    availabilityGrid={availability}  
                                    updateAvailability={updateAvailability}
                                    available={availability[row][col]}
                                    />
                            })
                        }
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "OpenSans",
        color: DARK_GREEN,
        fontSize: 18
    },
    invisible: {
        backgroundColor: CREME_WHITE
    },
    square: {
        width: 38,
        height: 20,
        margin: 1
    },
    available: {
        backgroundColor: LIGHT_GREEN
    },
    unavailable: {
        backgroundColor: "#D3D3D3"
    }
})