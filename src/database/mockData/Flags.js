/* eslint-disable linebreak-style */

const flagDb = [
  {
    carId: 2,
    reason: 'Stolen car',
    description: 'I have done my invesrigations and I can show evidence to attest to the fact that this car on display is stolen',
    reporter: 'John Doe',
  },
];

class Flags {
  static insertFlag(flag) {
    return flagDb.push(flag);
  }
}

export { flagDb, Flags };
