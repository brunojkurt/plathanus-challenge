const request = require("supertest");

describe('Authentication', () => {
  it('Should return JWT auth token', async () => {
    const response = await request('http://localhost:3333')
      .post('/login')
      .send({
        email: 'admin@plathanus.com.br',
        password: 'plathanus@2020'
      });

      expect(response.body).toHaveProperty("token");
  });
});