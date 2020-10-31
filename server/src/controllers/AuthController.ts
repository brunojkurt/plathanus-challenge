import { Request, Response } from 'express';
import knex from '../database/connection';
import jwt from 'jsonwebtoken';
import hash, { compare } from '../utils/hash';
require('dotenv').config();

class AuthController {

  async adminLogin (request: Request, response: Response) {
    interface Admin {
      uuid: string,
      name: string,
      email: string,
      password: string;
    }

    const { email, password } = request.body;

    try {
      const admin: Admin = await knex('admins')
      .select('*')
      .where('email', email)
      .first();

      if (!admin) {
        return response.json({ error: { messages: ['O e-mail informado não foi encontrado em nossos registros.'] }});
      }
      
      const validatePassword = await compare(password, admin.password);

      if (!validatePassword) {
        return response.json({ error: { messages: ['Senha incorreta.'] }});
      }

      const adminData = {
        id: admin.uuid,
        name: admin.name,
        email: admin.email
      };

      const token = jwt.sign(adminData, String(process.env.TOKEN_ADMIN_SECRET));

      return response.json({
        admin: adminData,
        token: token
      })

    } catch (err) {
      console.log(err);
      return response.status(500).json('Internal server error');
    }
  }
}

export default AuthController;