import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FavouritesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FavouritesTab</Text>
            </View>
        );
    }
}
export default FavouritesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});