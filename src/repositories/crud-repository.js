const { CrudModel } = require('../models');


const Create = async(data) => {
    const response = await CrudModel.create(data);
    return response;
}

const getAll = async() => {
    const response = await CrudModel.find();
    return response;
}

const findOne = async(id) => {
    const response = await CrudModel.findOne({username: id});
    return response;
}

const update = async(data, username) => {
    const response = await CrudModel.findOneAndUpdate({username}, data, {new: true});
    return response;
}

const destroy = async(id) => {
    const response = await CrudModel.findOneAndDelete(id);
    return response;
}

module.exports = {
    Create,
    getAll,
    update,
    destroy,
    findOne
}