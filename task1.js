var test = { "division1": {

"name":["Z","B","H"]

},

"division2": {

"name" :["Y","A","G"]

}

}

var data = test.division1.name.sort()
console.log(data)
var data1 = test.division2.name.sort()
console.log(data1)

var merge = test.division1.name.concat(test.division2.name)
merge.sort()
console.display(merge)
