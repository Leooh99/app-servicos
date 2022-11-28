import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Drawer from './src/routes/Drawer'

export default Routes => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  </SafeAreaView>
)