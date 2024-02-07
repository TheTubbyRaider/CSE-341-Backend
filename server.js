const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const swaggerSetup = require('./swagger');

// Other imports and middleware

app.use(express.json()); // Add this middleware to parse JSON requests
app.use('/api/users', usersRoutes);

// Include Swagger documentation
swaggerSetup(app);

// Other middleware and configurations

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
