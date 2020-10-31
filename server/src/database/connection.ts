const Knex = require('knex');
const knexConfig = require('../../knexfile');

const config = knexConfig();

const connection = Knex(config);

export default connection;