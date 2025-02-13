import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import icedCoffeImg from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeImg} resizeMode='cover' style={styles.image}>
        <Text style={styles.title}>Welcome to React Native</Text>
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>


    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margginbottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    textDecorationLine: "underline",
    padding: "4",
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#ffca99',
    borderRadius: 25,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  btnText: {
    color: '#713600',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: "4",
  },
})
