import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList, Text} from "react-native";
import { SearchBar } from "react-native-elements";
import commonStyles from "../styles/commonStyles";
import FriendCard from "../components/shared-components/FriendCard"
import { friends } from "../constants/defaultData";
import { CREME_WHITE, DARK_GREEN } from "../constants/themes";

const Friends = ({
    navigation
}) => {
    
    const renderItem = (item, index) => (
        <FriendCard 
            name={item.name} 
            plantLevel={item.plant} 
            onPressMethod={() => navigation.navigate("SingleFriend", 
                                                    {props: {name: item.name, url: item.url, activities: item.activities}})}
            size={"LARGE"}
        />
    )
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={[commonStyles.center, styles.topBar]}>
            <View style={styles.searchView}>
                <SearchBar
                    placeholder="Search for a friend..."
                    onChangeText={updateSearch}
                    value={search}
                    style={styles.search}
                    lightTheme={true}
                    containerStyle={{backgroundColor: CREME_WHITE}}
                    inputContainerStyle={{backgroundColor: CREME_WHITE}}
                />
            </View>
            
            <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.image}>
                <FlatList
                    data={friends}
                    renderItem={({item, index}) => renderItem(item, index)}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    style={{width: '100%'}}
                    contentContainerStyle={{alignItems: "center"}}
                    showsVerticalScrollIndicator={false}
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
        width: '90%',
    },
    topBar:{
        backgroundColor: CREME_WHITE
    },
    search: {
        backgroundColor: "#FFFFFF",
        color: DARK_GREEN,
        paddingHorizontal: 10,
        borderRadius: 20
    }
});

export default Friends;