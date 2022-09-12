function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) 
  {
   if (isNaN(salaries[key]) === true || isFinite(salaries[key]) === false)
   continue;
   sum += salaries[key];
  }
  return sum;
};
