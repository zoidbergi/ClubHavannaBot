import { isBirthdayToday } from "./announceBirthday"

test('Today is not my birthday', () => {
    let notToday = new Date("04 Dec 1995 00:12:00 GMT");
    expect( isBirthdayToday(notToday)).toBeFalsy;
});

