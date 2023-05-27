const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    host: process.env.PORT || 'localhost',
    database: 'react_gallery',
    port: 5432
})

pool.on('connect', () => {
    console.log('[adult swim]');
});

pool.on('error', (err) => {
    console.log('FLOATER IN THE POOL', err);
});

module.exports = pool;