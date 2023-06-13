const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_REST_API_KEY } = process.env;

// Передаємо ключ у імпортований об'єкт sgMail
sgMail.setApiKey(SENDGRID_REST_API_KEY);
// Після цього об'єкт sgMail готовий відправляти email.
// Але перед тим як відправляти його треба створити:
const email = {
  to: 'molobe5202@ratedane.com', // Кому ми відправляємо пошту
  from: 'mycloud@meta.ua', // Від кого
  subject: 'Test email', // Тема листа
  html: '<p><strong>Test email</strong> from localhost:3000!!! </p>', // Зміст листа
};
// Більшість css-правил поштові клієнти не підтримують. Тому тре використовувати шаблонізатори по типу npm i ejs

// Щоби відправити email потрібно викликати метод send(), який повертає проміс:
sgMail
  .send(email)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message));
