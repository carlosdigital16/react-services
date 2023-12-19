import { useState } from "react"
import { API_URL } from "../constants"

export const useSelectedUsers = () => {
  const [selecteds, setSelecteds] = useState([])
  
  const loadSelectedUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/test`)
      const data = await response.json()

      setSelecteds(data)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    selecteds,
    loadSelectedUsers,
  }
}