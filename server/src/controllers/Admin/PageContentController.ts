import { Request, response, Response } from 'express';
import knex from '../../database/connection';
import { QueryBuilder } from 'knex';

class PageContentController {

  async getMany (request: Request, response: Response) {
    const { content_names } = request.body;

    if(!content_names || content_names.length < 0) {
      response.status(500).json('Provide an array of contents to retrieve');
    }

    interface TContent {
      content_name: string;
      content: string;
    }

    const page_contents: TContent[] = await knex('page_content')
      .select('content_name', 'content')
      .where(async (builder: QueryBuilder) => {
        content_names.forEach((content_name: string) => {
          builder.orWhere('content_name', content_name)
        });
      })
    
    const contents: {[type: string]: string} = {};

    page_contents.forEach(content => {
      contents[content.content_name] = content.content;
    })

    return response.json(contents);
  }

  async get (request: Request, response: Response) {
    const { content_name } = request.params;

    const content = await knex('page_content')
      .select('*')
      .where('content_name', content_name)
      .first();

    if(!content) {
      return response.json({ errors: ['No content.'] });
    }

    return response.json(content);
  }

  async update (request: Request, response: Response) {
    const { content_name } = request.params;
    const { content } = request.body;
    
    try {
      const page_content = await knex('page_content')
        .select('*')
        .where('content_name', content_name)
        .first();
      
      if(page_content) {
        await knex('page_content')
          .where('content_name', content_name)
          .del();
      }

      await knex('page_content')
        .insert({
          content_name,
          content
        })
    } catch(err) {
      return response.status(500).json('Internal server error.');
    }

    return response.json('Conteúdo Atualizado!');
  }
}

export default PageContentController;