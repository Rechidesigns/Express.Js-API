const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
  info: {
    title: 'Your API Title',
    version: '1.0.0',
    description: 'API documentation using Swagger',
  },
};

// Options for the swagger-jsdoc package
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'], // Assuming your routes are in a 'routes' directory
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
