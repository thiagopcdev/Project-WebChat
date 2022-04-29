const { findAll } = require('../models/chatModel');

async function renderChat(_req, res) {
  try {
    const msgs = await findAll();
    return res.status(200).render('chatView', { msgs });
  } catch (e) {
    console.log(`Deu ruim: ${e.message}`);
    return res.status(500);
  }
}

module.exports = { renderChat };