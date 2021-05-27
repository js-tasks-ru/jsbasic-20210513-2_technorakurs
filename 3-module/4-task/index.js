

function showSalary(staff,age){
return staff.filter((el)=>el.age<=age)
.map((user)=>`${user.name}, ${user.balance}`).join('\n')
}
