const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const router = express.Router();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Music Store API",
      version: "1.0.0",
      description: "API documentation for Music Store",
      contact: {
        name: "Developer",
        email: "sonvip1998@gmail.com",
      },
      servers: [
        {
          url: "http://localhost:4200",
        },
      ],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/components/schemas/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
