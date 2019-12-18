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
      navigationBarTitleText: '首页',
      navigationBarBackgroundColor: "#ea8567",
  }

  constructor(props) {
    super(props);
    this.state = {
      height : 100,
      width: 100,
      }
      this.createAv = this.createAv.bind(this)
  }
  createAv() {
    const ctx = Taro.createCanvasContext('header' ,this)
    const that = this
    const { url, id } = this.props.counter
    const backUrl = `../../asset/image/${id + 1}.png`
    const width = this.state.width
    const height = this.state.height
    ctx.arc(width/2 , height/2, width / 2-4, 0,  2* Math.PI)
    ctx.clip()
    ctx.drawImage(url, 0, 0, width+2, height  )
    ctx.save()
    ctx.restore()
    ctx.drawImage(backUrl, 0, 0, width, height )
    ctx.stroke()
    ctx.draw(false, () => {
        Taro.canvasToTempFilePath({
          x: 0,
          y: 0,
          width,
          height,
          destWidth: width,
          destHeight: height,
          canvasId: 'header',
          success: function (res) {
            const fileUrl = res.tempFilePath
            Taro.saveImageToPhotosAlbum({
              filePath:fileUrl,
              success:(res)=>{
              Taro.showToast({
                title: '图片保存成功',
                icon: 'success',
                duration: 2000
              })
              },
              fail:(err)=>{
                Taro.showToast({
                  title: '图片保存失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            })
            Taro.hideLoading()
          },
          fail: function () {
            Taro.hideLoading()
          }
        }, that)
     })
}

  indexChange(id){
    this.props.indexChange(id)
  }

  render () {
    const {images} = this.props.counter
    return(
      <View　className="home"  
      style={{backgroundImage:`url(.${homePic})`}}
      > 
      <View className="imageBox">
        {images.map((index , id)=>{
          return(
            <View
            key={String(index)}
            style={{backgroundImage:`url(.${index })`}}
            onClick={this.indexChange.bind(this,id)}
            ></View>
          )
        })}
      </View>
        <drawImg></drawImg>
        <View className="downBtn">
            <View className="btn" onClick={this.createAv}>保存</View>
          </View>
          <canvas  canvasId="header"></canvas>
      </View>
    )

  }
}

export default Index
