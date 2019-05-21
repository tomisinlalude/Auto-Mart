import express from 'express';
const UserRouter = express.Router();

import User from '../database/models/user';

UserRouter.route('/create').post((req, res) => {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json('User added successfully');
    })
    .catch(err => {
      res.status(400).send("Unable to save data");
    });
});

export default UserRouter;