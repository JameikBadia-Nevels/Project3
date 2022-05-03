import axios from 'axios'

const URL = 'https://zawave-backend.herokuapp.com/wavez'

//gifs api 
const RandoUrl = `https://api.giphy.com/v1/gifs/random?api_key=gJPnCRbyzlymPwgMOfgUm8bBMTDXZSqJ`

//Animals api 
const Animals = 'https://zoo-animal-api.herokuapp.com/animals/rand/10'


export const getAnimals = () => {

    const response = axios.get(Animals)
    return response

}

export const getPosts = () => {

    const response = axios.get(URL)
    return response

}

export const getPost = (id) => {

    const response = axios.get(URL + id)
    return response

}

export const getProfile = (id) => {

    const response = axios.get(URL + id)
    return response 
}

export const uploadPost = (add) => {

    const response = axios.post(URL, add)
    return response 
}
export const uploadName = (add) => {

    const response = axios.post(add)
    return response 
}


export const editPost = (id, updatedPost) => {

    const repsonse = axios.put(URL + id, updatedPost)
    return repsonse
}

export const deletePost = (id) => {

    const response = axios.delete(URL + id)
    return response
    
}


export const getRando = () => {

    const response = axios.get(RandoUrl)
    return response 
    
}


