let message;
const rightPassword = 'Добро пожаловать!';
const userCancel = 'Отменено пользователем!';
const wrongPassword = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = prompt('Пожалуйста, введите пароль');

if (ADMIN_PASSWORD === 'jqueryismyjam') {
    alert (rightPassword);
} else if (ADMIN_PASSWORD === null) {
   alert (userCancel);
} else {
    alert (wrongPassword);
}