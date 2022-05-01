import useMainApiMutation from "./use-mutation";
import useMainApi from "./use-query";

const route = process.env.REACT_APP_SERVER_URL ||  'https://axiosuchunsinovapi.herokuapp.com';

const routes = {
  news: '/staff',
}; 

export const getAllNews = ({page , size})=>{
    return useMainApi(`${route+routes.news}?page=${page||1}&size=${size||10}`  )
}

export const createNews = ()=>{
    return useMainApiMutation('post',route + routes.news)
}

export const deleteNews = (id)=>{
    return useMainApiMutation('delete', `${route + routes.news}/${id}`)
}

export const editNews = (id)=>{
    return useMainApiMutation('put', `${route + routes.news}/${id}`)
}

