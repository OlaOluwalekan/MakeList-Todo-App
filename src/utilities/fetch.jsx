import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url, method, options) => {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState([])

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData()
  }, [url])
  return { loading, response }
}

export default useFetch
