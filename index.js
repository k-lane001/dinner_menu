let meats = [sausage, pepperoni, ham, bacon, hot_sausage, prociutto]
let vegetables = [onions, green_peppers, pepperocini, spinach]
let desserts = [cheesecake, ice_cream, cookie, brownie, cannoli]
let str_desserts = string(desserts[0])
let mondayMenu = meats.concat(vegetables).concat(desserts)

meats.pop(5);
vegetables.pop(4);
console.log(mondayMenu)
