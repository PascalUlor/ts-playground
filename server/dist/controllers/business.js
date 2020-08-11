"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testData_1 = __importDefault(require("../data/testData"));
const { businessData } = testData_1.default;
/**
 *
 *
 * @export
 * @class UserController
 */
class BusinessController {
    /**
     * API methods for user signup
     *
     * @param {obj} req
     * @param {obj} res
     */
    static getBusiness(req, res) {
        const { id } = req.params;
        const byId = (accumulator, current) => ({ ...accumulator, [current.id.toString()]: current });
        const business = businessData.reduce(byId, {});
        res.status(200).json({
            status: 200,
            message: 'Successfully retrieved a business',
            data: business[id]
        });
    }
}
exports.default = BusinessController;
