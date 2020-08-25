import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
 

const HooksCakecontainer = (props) => {
  const numOfCakes=useSelector(state=>state.numOfCakes);
  return (
    <>
      <View style={styles.screen}>
  <Text>Number of Cakes : {numOfCakes}</Text>
        <Button title='Buy Cake' />
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  screen: { height: "50%", width: "100%", justifyContent: 'center', alignItems: 'center' }

});



export default HooksCakecontainer
