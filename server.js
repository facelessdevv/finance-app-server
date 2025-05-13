const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
