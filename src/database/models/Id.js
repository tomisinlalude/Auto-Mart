/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */

import { UserDb } from './Models';

export const id = () => {
  if (id) {
    const userId;
    for (userId in UserDb) {
      userId += UserDb.id;
    }
  }
};
