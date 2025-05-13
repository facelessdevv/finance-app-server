const { Client } = require('pg');

const client = new Client({
  host: 'postgresql://tida2025:axPTKHzFfM4BZToMoNe6afkn3YBQirgW@dpg-d0hmhreuk2gs73eod4u0-a/tida',
  port: '5432',
  user: 'tida2025',
  password: 'axPTKHzFfM4BZToMoNe6afkn3YBQirgW',
  database: 'Tida_Database',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect((err) => {
  if (err) {
    console.error('❌ خطا در اتصال به دیتابیس:', err.stack);
  } else {
    console.log('✅ اتصال به دیتابیس PostgreSQL برقرار شد');

   
    client.query('SELECT * FROM documents', (err, res) => {
      if (err) {
        console.error('❌ خطا در اجرای کوئری:', err.stack);
      } else {
        console.log('📦 نتایج کوئری:', res.rows);
      }


      client.end();
    });
  }
});
