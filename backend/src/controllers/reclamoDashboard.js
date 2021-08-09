const ctrlDashboardReclaim = {};
const pool = require('../database');

ctrlDashboardReclaim.getAllReclaim = async (req, res) => {
    try {
        const reclaims = await pool.query('SELECT * FROM reclamo');
        res.json(reclaims);
    } catch (error) {
        res.json({ error: 'Ocurrió un error' });
    }
}

module.exports = ctrlDashboardReclaim;