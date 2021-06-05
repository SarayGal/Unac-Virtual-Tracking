import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { StudentController } from './../Controller/StudentController';
import { Router } from 'express';

const router = Router();

router.patch('/:id',[checkJwt, checkRole(['Estudiante'])],  StudentController.editStudents);

export default router;