"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/api/v1/', routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hello Backend'
    });
});
app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Invalid Route'
    });
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port}`));
