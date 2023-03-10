import axios from 'axios'
import { endpoint } from './ENDPOINT'

export const logoutRequest = async () => {

    try {
        const response = await axios.post(
            endpoint+"/chat-mate-api/logout",
            {},
            {
                withCredentials: true,
                headers: {
                    'id': JSON.parse(localStorage.getItem("userInfo") as string)?._id
                }
            }
        )
        return { message: response.data.message }
    } catch (error: any) {
        if(error.response.data.message) return { error: error.response.data.message }
        else return { error: "error while communicating to server" }
    }

}