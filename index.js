const express = require('express');
const app = express();

// Define routes and middleware here

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json'); // Path to your generated swagger.json file

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
