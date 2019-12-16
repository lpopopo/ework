import {Component} from '@tarojs/taro'

import './index.scss'
import { View , Image } from '@tarojs/components';

import { connect } from '@tarojs/redux'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))

class CreateHeader extends Component {
  render() { 
    const {url , images , id} = this.props.counter
    return(
      <View className="pageCanves">
        <View className="picShow">
          <Image src={url}></Image>
          <View
            className="picBorder"
            style={{ backgroundImage: `url(../../..${images[id]})` }}
            onClick=""
          ></View>
        </View>
      </View>
    )
  }
}
 
export default CreateHeader;