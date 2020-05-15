const validate = require("../api/middleware/validateMiddleware");
const schemas = require("../api/middleware/validateSchema");

const userRoutes = {
  "POST /register": {
    path: "userController.register",
    middleware: [validate(schemas.createUser)],
  },
  "POST /assign": {
    path: "taskController.register",
    middleware: [validate(schemas.createTask)],
  },
  "POST /unassign": {
    path: "taskController.destroy",
    middleware: [validate(schemas.unassignTask)],
  },
  "GET /tasks/common": {
    path: "userController.getTasks",
    middleware: [validate(schemas.assignTask)],
  },
};

module.exports = userRoutes;
