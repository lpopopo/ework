import Taro,{Component} from '@tarojs/taro'

import './index.scss'
import { View , Image } from '@tarojs/components';

import { connect } from '@tarojs/redux'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))

class CreateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height : 500,
      width: 500,
      fileUrl:'',
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
    console.log(backUrl)
    ctx.arc(0, 0, width / 2, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(url, 0, 0, width, height)
    ctx.save()
    ctx.restore()
    ctx.drawImage(backUrl, 0, 0, width, height)
    ctx.stroke()
    ctx.draw(false, () => {
      console.log('test')
      setTimeout(() => {
        Taro.canvasToTempFilePath({
          x: 0,
          y: 0,
          width,
          height,
          destWidth: width,
          destHeight: height,
          canvasId: 'header',
          success: function (res) {
            const fileUrl = res.tempFIlePath
            console.log(fileUrl)
            Taro.hideLoading()
          },
          fail: function () {
            console.log('faild')
            Taro.hideLoading()
          }
        }, that)
     
      }, 1000);
     })
}


  render() { 
    const {url , images , id} = this.props.counter
    return(
      <View className="pageCanves">
        <canvas id="header" canvasId="header"></canvas>
        <View className="picShow">
          <Image src={url}></Image>
          <View
            className="picBorder"
            style={{ backgroundImage: `url(../../..${images[id]})` }}
            onClick=""
          ></View>
          <View className="downBtn">
            <View className="btn" onClick={this.createAv}>保存</View>
          </View>
        </View>
      </View>
    )
  }
}
 
export default CreateHeader;