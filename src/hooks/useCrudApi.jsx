import { useState } from 'react'
import axios from 'axios'

function useFetchApi () {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  const request = async ({ url, method = 'GET', body = null, id = null }) => {
    setPending(true)
    setError(null)
    try {
      const res = await axios({
        url,
        method,
        data: method !== 'GET' ? body : null
      })
      switch (method) {
        case 'POST':
          setData([...data, res.data])
          break
          case 'PUT':
          case 'PATCH':
          setData(data.map(i => i.id === res.data.id ? res.data : i))
          break
        case 'DELETE':
          setData(data.filter(i => i.id !== res.data.id))
          break
        default:
          setData(res.data.results)
      }
    } catch (error) {
      setError(error)
    } finally {
      setPending(false)
    }
  }

  return { data, pending, error, request }
}
export default useFetchApi