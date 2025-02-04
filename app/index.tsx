import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hey Nans !</Text>
            <Text>Vive le saucisson</Text>
            <Link href={{ pathname: "/pokemon/[id]", params: { id: 3 } }}>Pokemon 3</Link>
            <Link href="/about">A propos</Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "red", flex: 1 },
});
