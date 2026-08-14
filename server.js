const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const emailRoutes = require('./routes/emailRoutes');
const instagramYoutubeRoutes = require('./routes/instagramYoutubeRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/email', emailRoutes);
app.use('/api/social', instagramYoutubeRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'Franca Shoes Backend',
    bots: ['P6.1-WhatsApp', 'P6.2-Email', 'P6.3-Instagram', 'P6.4-YouTube'],
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Franca Shoes Backend - API Bots 24/7' });
});

app.listen(PORT, () => {
  console.log('\n======================================');
  console.log('✅ P6.1 - WhatsApp Bot Online');
  console.log('✅ P6.2 - Email Bot Online');
  console.log('✅ P6.3 - Instagram Bot Online');
  console.log('✅ P6.4 - YouTube Bot Online');
  console.log('======================================');
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log('======================================\n');
});

module.exports = app;
