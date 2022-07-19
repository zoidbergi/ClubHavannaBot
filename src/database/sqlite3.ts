import Database from 'better-sqlite3';

const path = require('path');

const dbpath = path.join(__dirname, '..', '..', 'database', 'Club-Havanna.sqlite');
console.log(dbpath);

export const db = new Database(dbpath, { verbose: console.log });
