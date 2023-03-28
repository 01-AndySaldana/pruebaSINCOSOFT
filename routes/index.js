'use strict'

import * as path from 'path';
const join = path.join;

import express from 'express';
const route = express.Router();

import test from './test.js';
route.use('/doc', test);

export default route;
