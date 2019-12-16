import { LOGIN , IDCHANGE } from '../constants/counter'
import image1 from '../asset/image/1.png'
import image2 from '../asset/image/2.png'
import image3 from '../asset/image/3.png'
import image4 from '../asset/image/4.png'
import image5 from '../asset/image/5.png'
import image6 from '../asset/image/6.png'

const INITIAL_STATE = {
    name : '',
    url : '', 
    images:[
      image1,
      image2,
      image3,
      image4,
      image5,
      image6
    ],
    id:0,
}

const copy = obj =>{
  return JSON.parse(JSON.stringify(obj))
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      let user = copy(state)
      user.name = action.data.name
      user.url = action.data.avUrl
    return user
    case IDCHANGE:
      let idChange = copy(state)
      idChange.id = action.id
      return idChange
     default:
       return state
  }
}
