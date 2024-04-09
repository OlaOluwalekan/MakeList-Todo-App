import axios from 'axios'
import { useEffect, useState } from 'react'

const UsePost = (url, method, options) => {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState([])

  const postData = async () => {
    try {
      const { data } = await axios({
        method,
        url,
        options,
        withCredentials: true,
      })
      setResponse(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return { loading, postData, response }
}

export default UsePost
