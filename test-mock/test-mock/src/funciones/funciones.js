import axios from 'axios'

const todosPj = async (state) => {
    const peticion = await axios.get('https://6406b4a6862956433e57a578.mockapi.io/userAvatar')
    state(peticion.data)
}

const unPj = async(id, state) => {
    const peticion = await axios.get(`https://6406b4a6862956433e57a578.mockapi.io/userAvatar/${id}`)
    state(peticion.data)
}

export {
    todosPj,
    unPj
}