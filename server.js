// Importing the pg package for PostgreSQL
const { Client } = require('pg');

// تنظیمات اتصال به دیتابیس با استفاده از متغیرهای محیطی
const client = new Client({
  host: process.env.DB_HOST,        // آدرس دیتابیس (Render)
  port: process.env.DB_PORT || 5432, // پورت دیتابیس (پیش‌فرض 5432)
  user: process.env.DB_USER,        // نام کاربری دیتابیس
  password: process.env.DB_PASSWORD, // رمز عبور دیتابیس
  database: process.env.DB_NAME     // نام دیتابیس
});

// اتصال به دیتابیس PostgreSQL
client.connect((err) => {
  if (err) {
    console.error('خطا در اتصال به دیتابیس:', err.stack);
  } else {
    console.log('اتصال به دیتابیس برقرار شد');
  }
});

// مثال از یک کوئری ساده
client.query('SELECT * FROM documents', (err, res) => {
  if (err) {
    console.error('خطا در اجرای کوئری:', err.stack);
  } else {
    console.log('نتایج کوئری:', res.rows); // نتایج کوئری در اینجا نمایش داده می‌شود
  }
});
