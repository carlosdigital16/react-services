import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const API_URL = 'https://6578d273f08799dc804619b0.mockapi.io/api/v1'

export const App = () => {
  const [selecteds, setSelecteds] = useState([])
  const [users, setUsers] = useState([])
  
  const loadUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`)
      const data = await response.json()

      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }


  const loadSelectedUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/test`)
      const data = await response.json()

      setSelecteds(data)
    } catch (error) {
      console.error(error)
    }
  }


  const selectUser = async id => {
    try {
      await fetch(`${API_URL}/test`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ userId: id }),
      })

      loadSelectedUsers()
    } catch (error) {
      console.error(error)
    }
  }

  const removeUserSelection = async userId => {

    const { id } = selecteds.find((item) => item.userId == userId)
    try {
      await fetch(`${API_URL}/test/${id}`, {
        method: 'DELETE',
        headers: {'content-type':'application/json'},
      })

      loadSelectedUsers()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadUsers()
    loadSelectedUsers()
  }, [])

  const getUserClassName = (id) => {
    const isSelected = selecteds
    .map(selected => selected.userId)
    .includes(id)

    return  isSelected ? 'selected' : ''
  } 

  return (
    <>
      {users.map(user => (
        <div
          key={user.id}
          className={getUserClassName(user.id)}
          style={{ border: '1px solid' }}
        >
          <p>{user.name}</p>
          <button onClick={(event) => {
            event.preventDefault()
            selectUser(user.id)
          }}>
            Selecionar
          </button>

          <button onClick={(event) => {
            event.preventDefault()
            removeUserSelection(user.id)
          }}>
            Remover seleção
          </button>
        </div>
      ))}
    </>
  )
}
