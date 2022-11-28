import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import Home from '../views/Home';
import MeusAnuncios from '../views/MeusAnuncios';
import CadastrarServicos from '../views/CadastrarServicos';
import ContratarServico from '../views/ContratarServico';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userArea}>
        <Image
          source={require('../assets/user-128px.png')}
          style={styles.user}
        />
        <Text style={styles.nome}>Leonardo</Text>
        <Text style={styles.email}>leo@email.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator()

export default props => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Meus Anuncios" component={MeusAnuncios} />
    <Drawer.Screen name="Cadastrar Serviço" component={CadastrarServicos} />
    <Drawer.Screen name="Contratar Serviço" component={ContratarServico} />
  </Drawer.Navigator>
)

const styles = StyleSheet.create({
  userArea: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  user: {
    width: 50,
    height: 50,
  },
})
