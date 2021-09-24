import multer from 'multer';
import { Router } from 'express';
import { authenticate, createUser, updateUser } from '../controllers/users.controller';

const router = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public');
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/').pop();
        cb(null, file.originalname);
    }
  })
const upload = multer({ storage: storage })

router.post('/users', upload.single('profilePicture'), createUser);
router.post('/users/authenticate', authenticate);
router.put('/users/:id', updateUser);

export default router;
