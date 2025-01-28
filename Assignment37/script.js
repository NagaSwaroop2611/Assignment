const Employee = {
  EmpName : "Swaroop",
  empid : 100,
  empSalary : 10000,
  deptName : "Portonics"
};

for(let props in Employee){
  console.log(`${props} : ${Employee[props]}`);
}

let objLength = Object.keys(Employee).length;
console.log(objLength);

console.log("Before deleting deptName:", Object.keys(Employee));
delete Employee.deptName;
console.log("After deleting deptName:", Object.keys(Employee));