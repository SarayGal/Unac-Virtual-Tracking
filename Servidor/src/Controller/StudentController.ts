import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';
import { validate } from 'class-validator';



export class StudentController{

     //edit Students
     static editStudents = async (req: Request, res: Response) => {
        let user;
        
       const { id } = req.params;
        
        const {name} = req.body;
        const {email} = req.body;
        const {phone} = req.body;

        const userRepository = getRepository(Users);
        // Try get user
        try {
          user = await userRepository.findOneOrFail(id);
         
          user.name = name;
          user.email = email;
          user.phone = phone;

        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await userRepository.save(user);
        } catch (e) {
          return res.status(409).json({ message: 'Username already in use' });
        }
    
        res.status(201).json({ message: 'User update' });
      };



}
export default StudentController;