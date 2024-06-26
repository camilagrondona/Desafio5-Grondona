import {userModel} from "../models/user.model.js"

const getAll = async () => {
    const users = await userModel.find()
    return users // retorna los usuarios encontrados
}

const getById = async (id) => {
    const user = await userModel.findById(id) // busca el usuario por su id
    return user 
}

const getByEmail = async (email) => {
    const user = await userModel.findOne({email}) // busca el usuario por su email (el que está recibiendo)
    return user 
}

const create = async (data) => {
    const user = await userModel.create(data) // data recibida del usuario nuevo
    return user
}

const update = async (id, data) => {
    await userModel.findByIdAndUpdate(id, data) // no almacenamos en una variable la data porque cuando usamos la función no devuelve la información actualizada. Por eso primero la buscamos y después la devolvemos actualizada.
    const user = await userModel.findById(id) // buscamos ahora el usuario actualizado
    return user // lo devolvemos
}

const deleteOne = async (id) => {
    const user = await userModel.deleteOne({_id: id}) // le decimos que elimine el id de mongo que coincida con el id que le estoy enviando
    if (user.deletedCount === 0) return false // Si retorna false no se ha eliminado el usuario
    return true // retornamos el true para que nos indique que la eliminación se realizó de forma correcta ya que no interesa enviar la información del usuario eliminado 
}

export default {
    getAll,
    getById,
    create,
    update,
    deleteOne,
    getByEmail
}