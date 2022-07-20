import { isBirthdayToday } from '../messages/announceBirthday';

test('Today is not my birthday', () => {
  const notToday = new Date('04 Dec 1995 00:12:00 GMT');
  expect(isBirthdayToday(notToday)).toBeFalsy();
});
