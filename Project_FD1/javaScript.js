function Credit( ) {
    var monthlyPayment = 'Ваш ежемесячный платеж:';
    var loanAmount = prompt ('Введите желаемую сумму кредита');
    while ( true ) {
    var checkLoan = parseInt (loanAmount);
    if (!isNaN (checkLoan))
        break;
    loanAmount = prompt ('Введите корректное число!');
}
    var term = prompt ('Введите желаемое количество месяцев');
    while ( true ) {
    var checkTerm = parseInt (term);
    if (!isNaN (checkTerm))
        break; 
    term = prompt ('Введите корректное число!');
}
    var principalDebt = parseFloat (loanAmount) / parseFloat (term); // Расчет суммы основного долга
    var percentages = parseFloat (loanAmount) * 20 * 30 / 360 / 100; //Расчет суммы процентов годовых
    var calculation = principalDebt + percentages; //Основной долг + проценты
    alert (monthlyPayment + ' ' + calculation);
}