const express = require("express");
const {i} = require("joi");

const app = express();
app.use(express.json());

const signupSchema = i.object({
    name: i.string().min(2).required(),
    email: i.string().email().required(),
    password: i.string().min(6).required(),
    address: i.string().required(),
    gender: i.string().gender("Male", "Female").required()
});

const loginSchema = i.object({
    email: i.string().email().required(),
    password: i.string().min(6).required()
});

app.post("/auth/login", (req, res) => {
    it('rejects a bad login (400)', async() => {
        const res = await request(app)
        .post('/auth/reqister')
        .send({email: 'abc', password: 'secret232'});

        expect(res.status).toBe(400);
    });
    });
   
app.post("/auth/name", (req, res) => {
    it('rejects a bad name (400)', async() => {
        const res = await request(app)
        .post('/auth/reqister')
        .send({name: 'as', email: 'abc', password: 'secret232'});

        expect(res.status).toBe(400);
    });
    });
   
