import Knex from 'knex';

export async function seed (knex: Knex) {
  
  try {
    const welcome_content = await knex('welcome_content')
      .select('*')
      .first();
  
    if (welcome_content) {
      return
    }

  } catch(err) {
    console.log(err);
  }

  await knex('welcome_content')
    .insert({
      img_name: 'test-image.jpg',
      text: 'Loren Ipsum'
    });
}