const { crudRepository } = require('../repositories');

const createUser = async(data) => {
    try {
        const response = await crudRepository.Create(data);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = async() => {
    try {
        const response = await crudRepository.getAll();
        return response;
    } catch (error) {
        throw error;
    }
}

const updateUser = async(data, id) => {
    try {
        const response = await crudRepository.update(data, id);
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async(id) => {
    try {
        const response = await crudRepository.destroy(id);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}