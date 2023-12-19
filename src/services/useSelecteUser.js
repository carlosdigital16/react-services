import { API_URL } from "../constants"

export const useSelecteUser = (loadSelectedUsers) => {
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
    
    return {
        selectUser
    }
}