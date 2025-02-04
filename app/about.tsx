import { StyleSheet, View, Text } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>A propos.</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { backgroundColor: "red" },
});
