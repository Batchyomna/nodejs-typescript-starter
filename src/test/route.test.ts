import { createServer } from '../app/http/app'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
    app = await createServer();
});

describe('GET /', () => {
    it('should return 200 & valid response with Hello world !', async (done) => {
        request(app)
            .get(`/api/v1/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'Hello world !' });
                done();
            });
    });
});
describe('POST USER', () => {
    it('should return 200 & valid response with the first and the last name of an user', async (done) => {
        request(app)
            .post(`/api/v1/post-user`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ firstName:'Yomna', lastName: 'BATCH' });
                done();
            });
    });
});