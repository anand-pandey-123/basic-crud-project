const { crudServices } = require('../services');
const { crudRepository } = require('../repositories')

const createUser = async(req, res) => {
    try {
        const { username, description, email, password } = req.body;
        const data = {
            username,
            description,
            email,
            password
        }

        const existingUser = await crudRepository.findOne(username)
        if(existingUser){
            return res.status(401).json({
                success: false,
                message: "user already exists",
                data: {},
                error: {}
            })
        }

        const response = await crudServices.createUser(data);

        return res.status(200).json({
            success: true,
            message: "user created successfully",
            data: response,
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error while creating user",
            data: {},
            error: error
        })
    }
}

const allUsers = async(req, res) => {
    try {
        const response = await crudServices.getAllUsers();

        return res.status(200).json({
            success: true,
            message: "got all users",
            data: response,
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: "error while getting users",
            data: {},
            error: error
        })
    }
}

const updateUser = async(req, res) => {
    try {
        const {username, description, email, password, id } = req.body;
        const data = {
            username,
            description,
            email,
            password
        }
        const response = await crudServices.updateUser(data, id);

        return res.status(200).json({
            success: true,
            message: "user updated successfully",
            data: response,
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: "error while updating user",
            data: {},
            error: error
        })
    }
}

const deleteUser = async(req, res) => {
    try {
        const {username, description, email, password } = req.body;
        
        const response = await crudServices.deleteUser(password);

        return res.status(200).json({
            success: true,
            message: "user deleted successfully",
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "error while deleting user",
            data: {},
            error: error
        })
    }
}


module.exports = {
    createUser,
    allUsers,
    updateUser,
    deleteUser
} 