import { Command } from '../interfaces/Command';
import { addBirthdayCommand } from './birthday/addBirthday';
import { getBirthdayListCommand } from './birthday/getBirthdayList';
import { removeBirthdayCommand } from './birthday/removeBirthday';

export const CommandList: Command[] = [
  addBirthdayCommand,
  getBirthdayListCommand,
  removeBirthdayCommand,
];
