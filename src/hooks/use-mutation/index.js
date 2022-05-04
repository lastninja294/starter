import { useMutation } from 'react-query';
import MainRequest from '../request-main/index';
// methods: "post" , "get" , "put" , "patch" , "delete"


const useMainApiMutation = (method , url , options)=>{
   return useMutation(    
        variables => {
            const response = MainRequest({method, url , data: variables});
            return response
        },
        {
            ...options
        }
    )
}

export default useMainApiMutation