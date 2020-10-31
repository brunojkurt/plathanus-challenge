import Knex from 'knex';
import hash from '../../utils/hash';

export async function seed (knex: Knex) {
  
  try {
    const admin = await knex('admins')
    .select('*')
    .where('email', 'admin@plathanus.com.br')
    .first();
  
    if (admin) {
      return
    }

  } catch(err) {
    console.log(err);
  }

  await knex('admins')
    .insert({
      name: 'Administrator',
      email: 'admin@plathanus.com.br',
      password: await hash('plathanus@2020')
    });
}