import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN, LIGHT_RED } from '../../constants/themes'

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

}) => {

    const initAvailabilityGrid = new Array(16).fill(0).map(() => new Array(8).fill(false));

    const [availabilityGrid, setAvailabilityGrid] = useState(initAvailabilityGrid)

    const updateAvailability = (row, col) => {
        availabilityGrid[row][col] = !availabilityGrid[row][col]
        setAvailabilityGrid(availabilityGrid)
    }


    return (
        <View
            style={[commonStyles.cremeCard, { marginVertical: 30, width: "90%" }]}
        >
            <Text style={[styles.headerText, {marginBottom: 15}]}>
                My Availability
            </Text>
            <View>
                {availabilityGrid.map((_, row) =>

                    <View style={{ flexDirection: "row" }}>
                        {
                            availabilityGrid[0].map((_, col) => {
                                return <Square 
                                    key={row+","+col} 
                                    row={row} col={col} 
                                    availabilityGrid={availabilityGrid}  
                                    updateAvailability={updateAvailability}
                                    available={availabilityGrid[row][col]}
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
        backgroundColor: LIGHT_RED
    }
})