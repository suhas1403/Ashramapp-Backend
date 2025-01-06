require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const sevaRoutes = require('./routes/sevaRoutes');
const reprintRoutes = require('./routes/reprintRoutes');
const countRoutes = require('./routes/countRoutes');
const smsRoute = require('./routes/smsRoute');
const reportRouter = require('./routes/reportRouter');
const db = require('./config/db'); // Import the PostgreSQL connection

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()'); // Test query
    res.status(200).send(`Database connected successfully: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).send('Failed to connect to the database');
  }
});

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/seva', sevaRoutes);
app.use('/api/redo', reprintRoutes);
app.use('/api/count', countRoutes);
app.use('/api/sms', smsRoute);
app.use('/api/report', reportRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
