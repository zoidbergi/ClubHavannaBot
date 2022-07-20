import Database from 'better-sqlite3';
import { Options } from 'discord.js';

const path = require('path');

const dbpath = path.join(__dirname, '..', '..', 'database', 'Club-Havanna.sqlite');

const logVerboseCallback = (databaseString: Options) => {
  console.log(databaseString);
};

const db = new Database(dbpath, { verbose: logVerboseCallback });
export default db;
