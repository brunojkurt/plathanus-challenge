import { Request, Response } from 'express';
import knex from '../../database/connection';
import fs from 'fs';
import path from 'path';

class WelcomeController {

  async index (request: Request, response: Response) {
    const welcome_content = await knex('welcome_content')
      .select('*')
      .first();

    return response.json({
      ...welcome_content,
      img_url: `${process.env.HOST}:${process.env.PORT}/public/uploads/${welcome_content.img_name}`
    });
  }

  async updateImage (request: Request, response: Response) {
    const { filename } = request.file;

    const image = await knex('welcome_content')
      .select('*')
      .first();

    fs.unlinkSync(`${path.resolve(__dirname, "..", "..", "..", "public", "uploads")}/${image.img_name}`);

    await knex('welcome_content')
      .select('*')
      .where('id', image.id)
      .update({
        img_name: filename
      });
    
    return response.json({
      img_name: filename,
      img_url: `${process.env.HOST}:${process.env.PORT}/public/uploads/${filename}`
    });
  }
}

export default WelcomeController;