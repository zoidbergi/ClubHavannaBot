import db from './sqlite3';

export const getBirthdayList = async () => {
  function parseDateToComparable(input: Date): Date {
    input.setHours(0, 0, 0, 0);
    input.setFullYear(2000);
    return input;
  }

  const stmt = db.prepare('SELECT * FROM birthdays');
  const result = stmt.all();
  if (result !== undefined) {
    const resultOrdered = result.sort((a, b) => (
      (parseDateToComparable(new Date(a.birthday))
        > parseDateToComparable(new Date(b.birthday))) ? 1 : -1));
    return resultOrdered;
  }

  return result;
};

export const checkUserExsits = async (userName: string) => {
  const stmt = db.prepare('SELECT * FROM birthdays WHERE name = ?');
  const result = stmt.get(userName);
  if (result !== undefined) {
    return result;
  }
  return result;
};

// sqlite doesnt support date type :/
export const addBirthday = async (userName: string, birthdayDate: string) => {
  const stmt = db.prepare('INSERT INTO birthdays (name, birthday) VALUES (?, ?)');
  const result = stmt.run(userName, birthdayDate);
  if (result !== undefined) {
    return result;
  }
  return result;
};

export const removeBirthday = async (userName: string) => {
  const stmt = db.prepare('DELETE FROM birthdays WHERE name = ?');
  const result = stmt.run(userName);
  if (result !== undefined) {
    return result;
  }
  return result;
};

// ToDo: Update Birthday
export const updateBirthday = async (userName: string, newBirthdate: string) => {
  const stmt = db.prepare('UPDATE birthdays SET birthday = ? WHERE name = ?');
  const result = stmt.run(newBirthdate, userName);
  if (result !== undefined) {
    return result;
  }
  return result;
};
