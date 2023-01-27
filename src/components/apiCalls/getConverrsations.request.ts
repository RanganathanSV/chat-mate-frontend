import axios from 'axios'

export const getConversationsRequest = async () => {

    try {
        const response = await axios.get(
            "http://localhost:5000/chat-mate-api/get-conversations",
            {
                withCredentials: true
            }
        )
        return { res: response.data }
    } catch (error: any) {
        if(error.response.data.message) return { error: error.response.data.message }
        else return { error: "error while communicating to server" }
    }

}