// I. Функция возведения числа x в степень m

// Вариант 1
// Безусловно
function fnPow(x, m) {
  let result = x ** m;
  return result
}
// console.log(fnPow(0.5, -2));

// Вариант 2
// Ограничение области значений чисел - основания (x) и степени (m)
function fnPow_mod(x, m) {
  if (x <= 0)
    return alert('Основание степени должно быть положительным числом');

  else if (!(Number.isInteger(x)))
    return alert('Основание степени должно быть натуральным числом');

  else if (!(Number.isInteger(m))) {
    return alert('Показатель степени должен быть натуральным числом');
  }
  else {
    let result = x ** m;
    return result
  }
}
// console.log(fnPow_mod(8, 3.2));