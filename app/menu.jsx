import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'light' ? Colors.light : Colors.dark;
    const styles = CreateStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const separatorComponent = <View style={styles.separator} />;
    const HeaderComponent = <Text style={styles.header}>Top of Menu</Text>;
    const FooterComponent = <Text style={styles.header}>Bottom of Menu</Text>;


    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComponent}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                ListHeaderComponentStyle={styles.headerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>Data is empty</Text>}

                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}> {item.title} </Text>
                            <Text style={styles.menuItemDesc}> {item.description} </Text>
                        </View>
                        <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />
                    </View>
                )}
            />
        </Container>
    )
}

function CreateStyles(theme, colorScheme) {

    return StyleSheet.create({
        contentContainer: {
            backgroundColor: theme.background,
            paddingHorizontal: 12,
            paddingTop: 10,
            paddingBottom: 10,
            alignSelf: 'center',
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'light' ? "#ba835e" : 'papayawhip',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginTop: 10,
            marginBottom: 10,
            alignSelf: 'center',

        },
        headerComp: {
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10,
            color: theme.text,
            alignSelf: 'center',
        },
        footerComp: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10,
            color: theme.text,
            alignSelf: 'center',

        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            width: "100%",
            height: 100,
            maxWidth: 600,
            borderStyle: 'solid',
            borderColor: colorScheme === 'light' ? "#ba835e" : 'papayawhip',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            // width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
        },
        menuImage: {
            width: 100,
            height: 100,

        }
    })
}