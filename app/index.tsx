import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const colors = useThemeColors();
    return (
        <SafeAreaView style={(styles.container, { backgroundColor: colors.tint })}>
            <ThemedText variant="headline" color="grayWhite">
                Pokedex
            </ThemedText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});
