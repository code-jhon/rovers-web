import { useState, useEffect } from "react"
import ROVERS from '../api'

export const useRovers = () => {
  const [rovers, setRovers] = useState([])
  const [fetched, setFetched] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      const data = await ROVERS.getRovers()
      setRovers(data)
      setFetched(true)
    }
    !fetched && getData()
  }, [rovers, fetched])

  return [rovers, fetched]
}