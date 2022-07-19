let path = require('path');
const dbpath = path.join(__dirname, '..', '..', 'database', 'Club-Havanna.sqlite');
console.log(dbpath);

import Database from 'better-sqlite3';
export const db = new Database(dbpath, { verbose: console.log });

