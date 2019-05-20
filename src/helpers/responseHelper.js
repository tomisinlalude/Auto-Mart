class ResponseHelper {
    /**
     * @description This method sends a success response
     * @param  {string} message The response message
     * @param  {Object} data The response data
     * @param  {Object} res The response object
     */
    static successRes(message, data, res) {
      res.status(200).json({
        success: true,
        message,
        data,
      });
    }
  
    /**
     * @description This method sends a success response
     * @param  {string} message The response message
     * @param  {Object} res The response object
     */
    static successResWithoutData(message, res) {
      res.status(200).json({
        success: true,
        message,
      });
    }
  
    /**
     * @description This method sends a 404 response
     * @param  {string} message The response message
     * @param  {Object} res The response object
     */
    static notFound(message, res) {
      res.status(404).json({
        success: false,
        message,
      });
    }
  
    /**
     * @description This method sends a 400(param error) response
     * @param  {string} message The response message
     * @param  {Object[]} errors An array od error messages
     * @param  {Object} res The response object
     */
    static invalidReq(message, errors, res) {
      res.status(400).json({
        success: false,
        message,
        errors,
      });
    }
  
    /**
     * @description This method sends a predefined error response
     * @param  {Object} error The error
     * @param  {Object} res The response object
     */
    static sendErrorResponse(error, res) {
      res.status(error.code).json({
        success: false,
        message: error.message,
        errors: error.errors || [],
      });
    }
  
    /**
     * @description This method sends a predefined error response
     * @param  {Object} error The error
     * @param  {Object} res The response object
     */
    static sendServerErrorResponse(error, res) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  export default ResponseHelper;