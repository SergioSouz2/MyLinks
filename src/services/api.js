import axios from 'axios'

// key: f97539b5b4ece6a75390856e686accca0f10bf2d
// base url : https://api-ssl.bitly.com/v4/  

export const key = 'f97539b5b4ece6a75390856e686accca0f10bf2d'


export const api = axios.create({
   baseURL: 'https://api-ssl.bitly.com/v4/',
   headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
   }

})
