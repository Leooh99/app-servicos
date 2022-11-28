import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import Database from '../components/Database';

export default function CadastrarServicos({ navigation }) {
  const [nome, onChangeNome] = useState("");
  const [descricao, onChangeDescricao] = useState("");
  const [cidade, onChangeCidade] = useState("");
  const [preco, onChangePreco] = useState("");

  const cadastrarServico = async () => {
    const listItem = {nome, descricao, cidade, preco}
    Database.saveItem(listItem)
      .then(response => navigation.navigate("Meus Anuncios", listItem))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.label}>Nome do Serviço</Text>
          <TextInput style={styles.input} onChangeText={onChangeNome} value={nome}/>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput style={styles.input} onChangeText={onChangeDescricao} value={descricao}/>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput style={styles.input} onChangeText={onChangeCidade} value={cidade}/>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Preço</Text>
          <TextInput style={styles.input} keyboardType="numeric" onChangeText={onChangePreco} value={preco}/>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.botao} onPress={cadastrarServico}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  item: {
    width: '100%',
    height: 80,
    marginBottom: 15,
    backgroundColor: '#90939b',
    borderRadius: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  input: {
    marginHorizontal: 10,
    borderTopWidth: 1,
  },
  botao: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#605a5a',
    borderRadius: 15,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 20
  }
})