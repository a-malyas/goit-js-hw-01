const userCountry = prompt('Укажите страну, в которую необходимо доставить товар?');
const china = 'Китай';
const costChina = 100;
const chili = 'Чили';
const costChili = 250;
const australia = 'Австралия';
const costAustralia = 170;
const india = 'Индия';
const costIndia = 80;
const jamaica = 'Ямайка';
const costJamaica = 120;
let result = '';

switch (userCountry.toLowerCase()) {
    case 'китай':
        result = (`Доставка в ${china} будет стоить ${costChina} кредитов`);
        break;
    case 'чили':
        result = (`Доставка в ${chili} будет стоить ${costChili} кредитов`);
        break;
    case 'австралия':
        result = (`Доставка в ${australia} будет стоить ${costAustralia} кредитов`);
        break;
    case 'индия':
        result = (`Доставка в ${india} будет стоить ${costIndia} кредитов`);
        break;
    case 'ямайка':
        result = (`Доставка в ${jamaica} будет стоить ${costJamaica} кредитов`);
        break;
    
    default:
    alert('В вашей стране доставка не доступна');

}

alert(result);