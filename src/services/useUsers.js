import { useState } from "react"
import { API_URL } from "../constants"

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  
  const loadUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/users`)
      const data = await response.json()

      setUsers(data)
    } catch (error) {
      console.error(error)
    }
    loading(false)
  }

  return {
    users,
    loadUsers,
    loading,
  }
}