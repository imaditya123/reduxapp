import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {buyCake} from '../redux/index'
 

const Cakecontainer = (props) => {
  return (
    <>
      <View style={styles.screen}>
  <Text>Number of Cakes : {props.numOfCakes}</Text>
        <Button title='Buy Cake' onPress={props.buyCake}/>
      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

const styles = StyleSheet.create({
  screen: { height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }

});



export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer)
