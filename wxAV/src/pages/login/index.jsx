import Taro, {Component} from '@tarojs/taro'
import {View   ,Button , Text} from "@tarojs/components"

import { connect } from '@tarojs/redux'
import {userInfor} from '../../actions/counter'


import './index.scss'

@connect(({counter }) => ({
   counter
}), (dispatch) => ({
  userdata(data){
      dispatch(userInfor(data))
  }
}))

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  config= {
    navigationBarTitleText: '登录',
  }
 getUserData(){
   Taro.getUserInfo({
     success:(res) =>{
       const data = res.userInfo
         Taro.getImageInfo({
           src:data.avatarUrl,
           success:(res)=>{
            const user = {
              name : data.nickName,
              avUrl : res.path
            }
             this.props.userdata(user)
              Taro.navigateTo({
               url:'/pages/index/index'
              })
           }
         })
     }
   })
 }
  render() { 
    return (
      <View className="login">
        <View className="text">
        <View>申请获取以下权限</View>
        <Text>获得你的公开信息(昵称，头像等)</Text>
        </View>
        <Button
        className="btn"
        type="primary"
        openType="getUserInfo"
        onGetUserInfo={() =>this.getUserData()} 
        >登陆</Button>
      </View>
      );
  }
}
 
export default Login;