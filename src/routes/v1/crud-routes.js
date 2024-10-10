const router = require('express').Router()
const { crudController } = require('../../controllers');

router.get('/', crudController.allUsers);
router.post('/', crudController.createUser);
router.put('/', crudController.updateUser);
router.delete('/', crudController.deleteUser);

module.exports = router;


