import express from 'express';
import * as controller from './user.controller';

const router = express.Router();

router.get('/', controller.list);
router.delete('/:id', controller.destroy);
router.get('/me', controller.me);
router.get('/:id', controller.show);
router.post('/', controller.create);

export default router;
