import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FirstCard extends Component {
  render() {
    const { 
      propIcon,
      propCity, 
      propCountry, 
      propCondition, 
      propTemp, 
      propTempMin,
      propTempMax } = this.props
    return (
      <View style = {{backgroundColor:'#87CEEB' , width:'90%', height:'60%', justifyContent:'center', alignItems:'center', borderRadius:20}}>

        <Image style = {{width:'25%', height:'25%'}} source={{uri: propIcon}}></Image>
        <Text style = {{fontSize: 42}}>{propTemp}°C</Text>
        <Text style = {{fontSize: 32}}>{propCity} / {propCountry}</Text>
        <Text style = {{fontSize: 20, fontWeight:'600'}}>{propCondition}</Text>
        <Text style = {{fontSize: 20, fontWeight:'300'}}>En düşük: {propTempMin}°C</Text>
        <Text style = {{fontSize: 20, fontWeight:'300'}}>En yüksek: {propTempMax}°C</Text>

      </View>
    )
  }
}