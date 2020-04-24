function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b);
    console.log("Wynik", a + b);
});

callOtherFunction(function (a, b) {
    var wynik = a * b;
    console.log('Wynik mnożenia: ', wynik);
});

callOtherFunction(function (a, b) {
    console.log("a", a);
    console.log("b", b);
    console.log('"a" Zaokrąglone do 2 miejsc: ', a.toFixed(2));
    console.log('"b" Zaokrąglone do 3 miejsc: ', b.toFixed(3));
});

