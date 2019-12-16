import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {idChange} from '../../actions/counter'


import './index.scss'
import drawImg from '../../Components/createHeader/index'
import homePic from '../../asset/image/home.png'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  indexChange(index){
    dispatch(
      idChange(index)
    )
  }
}))

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount(){
  }
  componentDidMount(){
  }

  componentDidShow () { }

  componentDidHide () { }

  indexChange(id){
    this.props.indexChange(id)
  }

  render () {
    const {images} = this.props.counter
    return(
      <View　className="home"  
      style={{backgroundImage:`url(${homePic})`}}
      > 
      <View className="imageBox">
        {images.map((index , id)=>{
          return(
            <View
            key={String(index)}
            style={{backgroundImage:`url(../..${index })`}}
            onClick={this.indexChange.bind(this,id)}
            ></View>
          )
        })}
      </View>
        <drawImg></drawImg>
      </View>
    )

  }
}

export default Index
