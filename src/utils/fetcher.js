import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'



const instanceAxios = axios.create({
  // baseURL: 'https://intense-shore-46981.herokuapp.com/api/',
    baseURL: 'https://2e52-175-159-124-174.ngrok.io/api'

})

instanceAxios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instanceAxios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const code = error && error.response ? error.response.status : 0
    if (code === 401 || code === 403) {
      console.log('error code', code)
    }
    return Promise.reject(error)
  }
)

export default instanceAxios
