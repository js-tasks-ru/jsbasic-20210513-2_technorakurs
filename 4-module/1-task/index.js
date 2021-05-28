function makeFriendsList(listFriend) {
  let ul = document.createElement('ul');
  for(let unit of listFriend){
    let li = document.createElement('li')
    li.textContent = `${unit.firstName} ${unit.lastName}`
ul.append(li)
}
return ul
}
