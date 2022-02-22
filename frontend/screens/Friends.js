import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList} from "react-native";
import { SearchBar } from "react-native-elements";
import commonStyles from "../styles/commonStyles";
import FriendCard from "../components/shared-components/FriendCard"
import { friends } from "../constants/defaultData";
import { CREME_WHITE } from "../constants/themes";

const Friends = ({
    navigation
}) => {
    
    const renderItem = (item, index) => (
        <FriendCard name={item.name} plantLevel={item.plant} onPressMethod={() => navigation.navigate("SingleFriend")}/>
    )
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={[commonStyles.center, styles.topBar]}>
            <View style={styles.searchView}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                    style={commonStyles.search}
                    lightTheme={true}
                    containerStyle={{backgroundColor: CREME_WHITE}}
                    inputStyle={{backgroundColor: 'red'}}
                />
            </View>
            
            <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>
                <FlatList
                    data={friends}
                    renderItem={({item, index}) => renderItem(item, index)}
                    numColumns={4}
                    keyExtractor={(item, index) => index.toString()}
                    
                />
            </ImageBackground>
            
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '150%',
        textAlign: "center",
        alignItems: "center"
    },
    searchView: {
        margin: 10,
        width: '90%'
    },
    topBar:{
        backgroundColor: CREME_WHITE
    }
});

export default Friends;