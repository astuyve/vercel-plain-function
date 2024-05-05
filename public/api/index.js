"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(request, response) {
    response.status(200).json({
        text: `Hello from ${request.url}`
    });
}
exports.default = default_1;
