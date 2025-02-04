import type { ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { Card } from "@/components/Card";
import { StyleSheet, Image } from "react-native";

type Props = {
    style?: ViewStyle;
    id: number;
    name: string;
};

export function PokemonCard({ style, id, name }: Props) {
    return (
        <Card style={[style, styles.card]}>
            <ThemedText style={styles.id} variant="caption" color="grayMedium">
                #{id.toString().padStart(3, "0")}
            </ThemedText>
            <Image
                source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                }}
                style={{ width: 120, height: 120 }}
                onError={(e) => console.log("Erreur chargement image:", e.nativeEvent.error)}
                onLoad={() => console.log(`Image ${id} chargée`)}
                testID="pokemon-image"
            />
            <ThemedText style={styles.name}>{name}</ThemedText>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
    },
    id: {
        alignSelf: "flex-start",
    },
    name: {
        alignSelf: "flex-end",
    },
});
