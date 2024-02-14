import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [base, setBase] = useState('')
  const [height, setHeight] = useState('')
  const [area, setArea] = useState('')
  
  function calcArea(){
    let res = base * height /2
    setArea(res)
    setBase('')
    setHeight('')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.cim}>Háromszög</Text>

      <View style={styles.body}>
        <Text style={styles.szoveg}>Alap</Text>
        <TextInput
          style={styles.mezo}
          onChangeText={text => setBase(text)}
        />
        <Text style={styles.szoveg}>Magasság</Text>
        <TextInput
          style={styles.mezo}
          onChangeText={text => setHeight(text)}
        />
        <Pressable
          onPress={calcArea}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            SZÁMÍT
          </Text>
        </Pressable>
        <Text style={styles.szoveg}>Terület</Text>
        <TextInput
          style={styles.mezo}
          value = {area}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ferencsik Boglárka, 2024</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cim: {
    color: 'navy',
    fontWeight: 800,
    fontSize: 25,
    marginTop: 20,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  szoveg:{
    color: 'navy',
    fontWeight: 700,
    paddingBottom: 10,
    fontSize: 18,
  },

  mezo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    color: 'navy',
    fontWeight: 600,
    marginBottom: 20,
    borderColor: 'navy',
    borderWidth: 1,
  },

  button: {
    backgroundColor: 'navy',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700,
  },

  footer: {
    backgroundColor: 'navy',
    width: '100%',
    opacity: '80%',
    padding: 5
  },

  footerText: {
    color: 'white',
    textAlign: 'center'
  },
});
