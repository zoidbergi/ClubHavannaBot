import { Command } from '../interfaces/Command';
import addBirthdayCommand from './birthday/addBirthday';
import getBirthdayListCommand from './birthday/getBirthdayList';
import removeBirthdayCommand from './birthday/removeBirthday';
import getNextBirthday from './birthday/getNextBirthday';

const CommandList: Command[] = [
  addBirthdayCommand,
  getBirthdayListCommand,
  removeBirthdayCommand,
  getNextBirthday,
];

export default CommandList;
