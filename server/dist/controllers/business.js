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
        const { id } = req.params.id;
        const byId = (stored, current) => ({ ...stored, [current.id]: current });
        const business = businessData.reduce(byId, {});
        return business;
    }
}
exports.default = BusinessController;
