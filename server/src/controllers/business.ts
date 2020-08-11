import db from '../data/testData';

const { businessData } = db;
interface Business {
   readonly id: number
   businessName: string
   email: string
   category: string
   location: string
   Address: string
   Details: string
}

interface BusinessById {
   [id: string] : Business
}
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

 static getBusiness(req: any, res: any) {
    const { id } = req.params;
    const byId = (accumulator: BusinessById, current: Business) => ({...accumulator, [current.id.toString()]: current});
    const business = businessData.reduce(byId, {});
   res.status(200).json({
      status: 200,
      message: 'Successfully retrieved a business',
      data: business[id]
   })
 }
}