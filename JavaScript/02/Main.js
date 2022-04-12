var countrysH={};

// Ввод информации о стране
function addCountryInfo () {
    var countryName = prompt ('Введите название страны');
    var capitalName = prompt ('Введите название столицы');
    addCountry(countryName,capitalName);
}
function addCountry(countryName,capitalName) {
    countrysH[countryName]=capitalName;
}
// Удаление информации о стране
function infoDel () {
    var countryName = prompt ('Введите название страны');
    deleteCountry(countryName);
    alert ('Удалена информация о стране' + ':' + ' ' + countryName + '!');
}
function deleteCountry(countryName) {
    delete countrysH[countryName];
}

// Получение информации о стране
function infoGet () {
   var countryName = prompt ('Введите название страны');
   var info = getCountryInfo(countryName);
   alert (info);
}
function getCountryInfo(countryName) {
    if ( countryName in countrysH )
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
    else
        return 'нет информации о стране ' + countryName + '!' ;
}

// Перечень всех стран
function listAlert () {
    var list = listCountrys(addCountry);
    alert (list);
}
function listCountrys() {
    var res="";
    for ( var CN in countrysH )
        res+='\n'+getCountryInfo(CN);
    return res;
}

addCountry('Германия','Берлин');
addCountry('Венгрия','Будапешт');
addCountry('Франция','Париж');

console.log( "список стран:" + listCountrys() );