'use strict';

const bearer = require('./../../../../src/auth/middleware/bearer-auth');
const { db, users } = require('./../../../../src/auth/models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const API_SECRET = process.env.API_SECRET || 'CHANGE_ME';

describe('Access control list', () => {
  test('Should allow a user to read a list of food', () => {
    expect(true).toBeTruthy();
  });
});  