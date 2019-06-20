/* eslint-disable linebreak-style */

import { Flags } from '../database/mockData/Flags';
import flagModel from '../database/models/flagModel';
import carModel from '../database/models/carModel';

const { insertFlag } = Flags;

class FlagController {
  static async flagCarAd(req, res) {
    try {
      const {
        carId, reason, description, reporter,
      } = req.body;
      const { checkReporter } = await flagModel;
      if (!checkReporter) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
        });
      }
      const car = await carModel.selectSpecificCar(carId);
      if (!car) {
        return res.status(404).json({
          success: false,
          message: 'This car is not found',
        });
      }
      const flag = await flagModel.createFlag(carId, reason, description, reporter);
      insertFlag(flag);
      return res.status(201).json({
        success: true,
        message: 'Your report has been successfully created',
        data: flag,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Not successful',
      });
    }
  }
}
export default FlagController;
