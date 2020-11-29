const rightPassword = 'Добро пожаловать!';
const userCancel = 'Отменено пользователем!';
const wrongPassword = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = prompt('Пожалуйста, введите пароль');
let message;

if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = rightPassword;
} else if (ADMIN_PASSWORD === null) {
   message = userCancel;
} else {
    message = wrongPassword;
}
alert(message);