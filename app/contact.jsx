import { StyleSheet, Image, Platform, View, Text, Linking, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';


import contactBack from "@/assets/images/contact_back.jpg";

export default function TabTwoScreen() {
  const coffeeShop = {
    name: "Golden Brew Café",
    address: "123 Bean Street, Coffee Town, CT 45678",
    phone: "+1 234-567-8901",
    email: "contact@goldenbrew.com",
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffca99', dark: '#FFD59A' }}
      headerImage={
        <Image
          source={contactBack}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }>
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>{coffeeShop.name}</Text>
        <Text style={styles.contactText}>{coffeeShop.address}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${coffeeShop.phone}`)}>
          <Text style={styles.contactLink}>{coffeeShop.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${coffeeShop.email}`)}>
          <Text style={styles.contactLink}>{coffeeShop.email}</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    color: '#808080',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  contactContainer: {
    padding: 20,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  },
  contactLink: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});
