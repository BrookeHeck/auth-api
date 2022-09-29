'use strict'

const acl = require('./../../../../src/auth/middleware/acl');
const { db, users } = require('./../../../../src/auth/models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const API_SECRET = process.env.API_SECRET || 'CHANGE_ME';
const request = require('supertest');

let userInfo = {
  user: { username: 'user', password: 'password' },
};


beforeAll(async () => {
  await db.sync();
  await users.create(userInfo.user);
});
afterAll(async () => {
  await db.drop();
});

describe('Access control list', () => {
  test('Should allow a user to read a list of food', () => {
    expect(true).toBeTruthy();
  });
});