import { Alert, Button, Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import FirstCard from './src/components/FirstCard'

export default class App extends Component {
  state = {
    city: '',
    country: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    condition: '',
    cityInput: 'ankara',
    icon: 'https://cdn-icons-png.flaticon.com/512/648/648198.png'
  }

  firstFunc = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=${YOUR_API_KEY}f&lang=tr`)
      .then(value => value.json())
      .then(give => {
        this.setState({
          city: give.name,
          country: give.sys.country,
          temp: (give.main.temp - 272.15).toFixed(),
          tempMin: (give.main.temp_min - 272.15).toFixed(),
          tempMax: (give.main.temp_max - 272.15).toFixed(),
          condition: give.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${give.weather[0].icon}@2x.png`

        })
      })
      .catch(err => Alert.alert("Geçersiz bir değer girdiniz."))
  }

  componentDidMount(): void {
    this.firstFunc()

  }

  cityChange = (val: any) => {
    this.setState({
      cityInput: val
    })

  }

  render() {
    const { city, country, temp, condition, cityInput, icon, tempMin, tempMax } = this.state
    return (
      <SafeAreaView style={{ backgroundColor: '#FFE4C4', flex: 1 }}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <FirstCard
            propIcon={icon}
            propCity={city}
            propCondition={condition}
            propCountry={country}
            propTemp={temp}
            propTempMin={tempMin}
            propTempMax={tempMax}>

          </FirstCard>

        </View>

        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>

          <TextInput
            style={{ borderWidth: 1, width: '88%', height: '25%', borderRadius: 20, fontWeight: '600' }}
            placeholder='Şehir giriniz...'
            textAlign='center'
            clearButtonMode='always'
            onChangeText={change => this.cityChange(change)}>
          </TextInput>

          <Button title='Ara' onPress={this.firstFunc} />

        </View>

      </SafeAreaView>
    )
  }
}