import { SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity, Text, Image, Alert } from 'react-native'
import React from 'react'

export default function ContratarServico({ navigation }) {
  const ContratarServico = () => {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja contratar este serviço?",
      [
          {
          text: "Não",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
          },
          { text: "Sim", onPress: () => {
              Alert.alert("Sucesso", "Serviço contratado com sucesso!")
              navigation.navigate("Home");
            }
          }
      ],
      { cancelable: false }
    );
    
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.texto}>Serviço de Jardinagem</Text>
                <Text style={styles.texto}>Poços de Caldas - MG</Text>
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
            <View style={styles.descricao}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={{marginLeft: 10}}>Serviço realizado somente na região de Poços de Caldas</Text>
            </View>
            <View>
              <Text style={styles.texto}>R$ 50,00 por hora</Text>
              <Text style={styles.texto}>Seg a Sex - 06:00 às 18:00</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.botao} onPress={ContratarServico}>
                <Text style={styles.botaoTexto}>Contratar</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 500,
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
  descricao: {
    width: '90%',
    height: 100,
    marginBottom: 15,
    backgroundColor: '#90939b',
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  botao: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#605a5a',
    borderRadius: 15,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 20
  },
  texto: {
    fontSize: 16,
  },
})