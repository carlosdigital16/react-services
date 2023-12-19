import './App.css'
import { useEffect } from 'react'
import { useUsers } from './services/useUsers'
import { useSelectedUsers } from './services/useSelectedUsers'
import { useRemoveUserSelection } from './services/useRemoveUserSelection'
import { useSelecteUser } from './services/useSelecteUser'


export const App = () => {
  const { loadUsers, users } = useUsers()
  const { loadSelectedUsers, selecteds } = useSelectedUsers()
  const { removeUserSelection } = useRemoveUserSelection(selecteds, loadSelectedUsers)
  const { selectUser } = useSelecteUser()

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
