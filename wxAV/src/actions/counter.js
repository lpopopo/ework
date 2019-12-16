import{
  LOGIN,
  IDCHANGE,
}from '../constants/counter'

export const userInfor = (data)=> {
  return {
    type: LOGIN,
    data,
  }
}

export const idChange = (id)=>{
  return{
    type:IDCHANGE,
    id,
  }
}