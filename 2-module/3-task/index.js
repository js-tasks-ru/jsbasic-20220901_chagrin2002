let calculator = 
{
  a:0,
  b:0,

  sum(a,b) 
  {
    return this.a + this.b;
  },
  mul(a,b)
  {
    return this.a * this.b;
  },
  read(a,b)
  {
    this.a = a;
    this.b = b;
  }
 
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
