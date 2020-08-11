import db from '../data/testData';

const { businessData } = db;
/**
 *
 *
 * @export
 * @class UserController
 */
export default class BusinessController {
/**
 * API methods for user signup
 *
 * @param {obj} req
 * @param {obj} res
 */

 static getBusiness(req, res) {
    const { id } = req.params.id;
    const byId = (stored: any, current: any) => ({...stored, [current.id]: current});
    const business = businessData.reduce(byId, {});
    return business;
 }
}