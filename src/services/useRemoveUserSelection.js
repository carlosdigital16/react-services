import { API_URL } from "../constants"

export const useRemoveUserSelection = (selecteds, loadSelectedUsers) => {
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


    return {
        removeUserSelection,
    }
}
