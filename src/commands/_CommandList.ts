import { Command } from '../interfaces/Command';
import addBirthdayCommand from './birthday/addBirthday';
import getBirthdayListCommand from './birthday/getBirthdayList';
import removeBirthdayCommand from './birthday/removeBirthday';

const CommandList: Command[] = [
  addBirthdayCommand,
  getBirthdayListCommand,
  removeBirthdayCommand,
];

export default CommandList;
