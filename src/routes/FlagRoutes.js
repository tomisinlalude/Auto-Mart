/* eslint-disable linebreak-style */
import { Router } from 'express';

import FlagControllers from '../controllers/FlagControllers';

const flagRouter = Router();

flagRouter.post('/',
  FlagControllers.flagCarAd);

export default flagRouter;
