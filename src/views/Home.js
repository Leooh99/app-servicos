import { SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  const ContratarServico = () => {
    navigation.navigate("Contratar Serviço")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TextInput
          style={styles.search}
          placeholder="Buscar"
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={ContratarServico}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Text>Serviço de Jardinagem</Text>
                <Text>Poços de Caldas - MG</Text>
                <Text>R$ 50,00</Text>
              </View>
              <View style={{alignItems: 'center', marginLeft: 20}}>
                <Image
                  source={require('../assets/user-128px.png')}
                  style={styles.user}
                />
                <Text style={styles.nome}>Usuário X</Text>
                <Text style={styles.email}>usuariox@email.com</Text>
              </View>
            </View>       
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  search: {
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 350,
    marginVertical: 20,
    borderWidth: 1,
    alignContent: 'center',
    borderRadius: 15,
  },
  user: {
    width: 50,
    height: 50,
  },
})