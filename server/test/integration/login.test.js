const request = require('supertest');
const app = require('../../server'); 
const path = require('path');

describe('POST /login', () => {
  it('responde con json conteniendo un token de acceso para credenciales válidas', (done) => {
    request(app)
      .post('/api/usuarios/login') 
      .send({
        username: 'denisxd',
        password: '1234',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('responde con un mensaje de error por nombre de usuario no válido', (done) => {
    request(app)
      .post('/api/usuarios/login') 
      .send({
        username: 'denisxdd',
        password: '1234',
      })
      .expect('Content-Type', /json/)
      .expect(401) 
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('Credenciales incorrectas'); 
        done();
      });
  });

  it('responde con un mensaje de error por contraseña no válido', (done) => {
    request(app)
      .post('/api/usuarios/login') 
      .send({
        username: 'denisxd',
        password: '12344',
      })
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('Credenciales incorrectas'); 
        done();
      });
  });

  /*it('creates a new plant with an image and responds with JSON', async () => {
    const imagePath = path.join(__dirname, '../test/assets/jardin.jpg');
    const res = await request(app)
      .post('/api/plantas/agregar')
      .field('nombre', 'Nueva Planta')
      .field('nombreCientifico', 'Plantae Novum')
      .field('beneficios', 'Muchos beneficios')
      .field('descripcion', 'Descripción detallada de la planta.')
      .attach('imagen', imagePath)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('idPlanta');
  });*/

});
