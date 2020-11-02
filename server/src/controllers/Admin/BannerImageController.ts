import { Request, Response } from 'express';
import knex from '../../database/connection';
import fs from 'fs';
import path from 'path';

class BannerImageController {
  async index(request: Request, response: Response) {
    const bannerImage = await knex('banner_images')
      .select('*')
      .first();
    
    if(!bannerImage) {
      return response.json({ errors: ['No image have been uploaded.'] });
    }

    return response.json({
      ...bannerImage,
      path: `${process.env.HOST}:${process.env.PORT}${bannerImage.path}`
    });
  }

  async update(request: Request, response: Response) {
    const { filename } = request.file;
    const newImage = {
      filename: filename,
      path: `/public/uploads/${filename}`
    }

    try {
      const bannerImage = await knex('banner_images')
      .select('*')
      .first();

      if(bannerImage) {
        fs.unlinkSync(`${path.resolve(__dirname, "..", "..", "..", "public", "uploads")}/${bannerImage.filename}`);

        await knex('banner_images')
          .where('id', bannerImage.id)
          .del();
      }

      await knex('banner_images')
        .insert(newImage);
        
    } catch (err) {
      return response.status(500).json('Internal server error');
    }

    response.json({
      ...newImage,
      path: `${process.env.HOST}:${process.env.PORT}${newImage.path}`
    });
  }
}

export default BannerImageController;