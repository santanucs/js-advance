const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

const companyDetails = [{
    company: 'company1',
    employee:100
},{
    company: 'company2',
    employee: 200
},{
    company: 'company3',
    employee: 400
},{
    company: 'company4',
    employee: 150
}]


let employeeArr = companyDetails.map((company)=>{
    return company.employee > 199? company:null;
})
// console.log(employeeArr);

let companyList = employeeArr.filter((employee)=>employee!=null);
console.log(companyList)
// Other approach
let companyListOther = companyDetails.filter((companyDetail)=>companyDetail.employee > 199);
console.log(companyListOther);



// expected output: Array [8, 6, 7, 9]
