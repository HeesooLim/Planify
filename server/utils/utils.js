const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

class Utils {
  /**
   * Return the response with its HTTP status and the message to send.
   *
   * @static
   * @param {*} res Response object to set the status and message.
   * @param {*} status HTTP status code to set.
   * @param {*} message message to send to the client.
   * @return {*} response with the HTTP status and the message.
   * @memberof Utils
   */
  static resStatusMsg(res, status, message) {
    return res.status(status).send({ message: message });
  }

  /**
   * Return the Unique id
   *
   * @static
   * @return {*} Return the string uuid using uuidv4().
   * @memberof Utils
   */
  static getUuid() {
    return uuidv4();
  }

  /**
   * Add minutes to the date and return the result(date).
   *
   * @static
   * @param {*} date Date to add minutes.
   * @param {*} minuteToAdd Minutes to add to the date.
   * @return {*} 
   * @memberof Utils
   */
  static addMinutesToDate(date, minuteToAdd) {
    return date.setMinutes(date.getMinutes() + minuteToAdd);
  }

  /**
   * Check if str1 includes any substring of str2.
   * Example usage: check whether password includes email or name.
   *
   * @param {string} str1 String to check if substring of str2 is included.
   * @param {string} str2 String to compare to str1.
   * @param {number} substrLen Length of substring which will be applid to str2.
   * @return {*}  {boolean}
   * @memberof Utils
   */
  static strIncludesStr(str1, str2, substrLen) {
    // Both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // If the second string's length is less than or equal to the substring length(invalid), return false
    if (str2.length <= substrLen)
      return false;

    // For loop
    for (let i = 0; i < str2.length - substrLen; i++) {
      // Substring the second string from (i) to (i + length)
      let substring = str2.substring(i, i + substrLen);

      // If the first string includes the substring of the second string, return true
      if (str1.includes(substring))
        return true;
    }
  }
}



exports = module.exports = Utils;
