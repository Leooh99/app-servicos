import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Database from '../components/Database';
import AppItem from '../components/AppItem';

export default function MeusAnuncios({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
      Database.getItems()
        .then(items => setItems(items));
      console.log()
  }, [route]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => {
                return <AppItem key={item.id} id={item.id} item={"Serviço: " + item.nome + "\n" + "Descrição: " + item.descricao + "\n" + "Cidade: " + item.cidade + "\n" + "R$ " + item.preco} navigation={navigation} />
            }) }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%'
  },
  buttonsContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'flex-end',
      borderBottomWidth: 1,
      borderBottomColor: '#CCC',
      paddingBottom: 10,
      marginTop: 10,
  },
  editButton: {
      marginLeft: 10,
      height: 40,
      backgroundColor: 'blue',
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: '#ccc',
      alignItems: 'center'
  },
  deleteButton: {
      marginLeft: 10,
      height: 40,
      width: 40,
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: '#ccc',
      alignItems: 'center'
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
  },
  textItem: {
      fontSize: 20,
  },
})