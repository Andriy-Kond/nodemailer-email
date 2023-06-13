require('dotenv').config();
// 1. імпортуємо nodemailer
const nodemailer = require('nodemailer');

const { META_PASS } = process.env;

// 2. Створюємо об'єкт налаштувань:
const nodemailerConfig = {
  host: 'smtp.meta.ua', // Адреса поштового сервера
  port: 465, // Порт на поштовому сервері, до якого треба підключитись. Ще може бути 25, 465 і 2525, але вони не захищені на відміну від 465
  secure: true, // Чи треба шифрувати трафік. На 465 порті треба.
  auth: {
    user: 'mycloud@meta.ua', // Пошта, до якої ми підключаємось - цю пошту треба шукати на сервері, що прописаний у host: 'smtp.meta.ua'
    pass: META_PASS, // пароль від цієї пошти
  },
};

// 3. Створюємо транспорт
// Щоб відправити листа, треба за допомогою цього nodemailerConfig створити об'єкт транспорт (налаштований nodemailer), який буде займатись відправленням пошти
const transport = nodemailer.createTransport(nodemailerConfig);

// 4. Створюємо email
const email = {
  to: 'molobe5202@ratedane.com', // Кому ми відправляємо пошту
  from: 'mycloud@meta.ua', // Від кого
  subject: 'Test email', // Тема листа
  html: '<p><strong>Test email</strong> from localhost:3000!!! </p>', // Зміст листа
};

// 5. Відправляємо пошту:
transport
  .sendMail(email)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message));
