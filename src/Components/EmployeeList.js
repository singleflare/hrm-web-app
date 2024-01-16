import React from "react"

const employees = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 40 }
];

const Employee=props=>{
  return(
    <div>{props.name}, {props.age}</div>
  )
}

const EmployeeList=()=>{
  return(
    <div className="EmpEntry">
      {employees.map((employee,i)=>(
        <Employee name={employee.name} age={employee.age} />
      ))}
    </div>
  )
}
export default EmployeeList