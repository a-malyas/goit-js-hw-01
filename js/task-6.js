let input;
let total = 0;

do {
    input = prompt('Введите, пожалуйста, число');

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    
    total +=Number(input);

} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);