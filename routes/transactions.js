const router = require('express').Router();
const {index, create, destroy, update} = require('../controllers/TransactionController');

router.get('/', index);
router.post('/', create);
router.delete('/:id',destroy);
router.put('/:id',update);

module.exports = router;
