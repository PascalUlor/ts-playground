"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @class UserController
 */
class UserController {
    /**
     * API methods for user signup
     *
     * @param {obj} req
     * @param {obj} res
     */
    static getUser(req, res) {
        const { id } = req.params.id;
        const byId = (stored, current) => ({ ...stored, [current.id]: current });
        const businessRepo = ;
    }
}
exports.default = UserController;
