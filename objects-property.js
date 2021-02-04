const students = [
    {id: 21 , name: 'Mohin'},
    {id: 52 , name: 'kalam'},
    {id: 36 , name: 'rahman'},
    {id: 24 , name: 'uddin'},
];
const listName = [];
const ids = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    // const res = console.log(element);
    listName.push(element.name);
    ids.push(element.id);
    
}
const objectName = console.log('Object name property: ', listName);
const objectId = console.log("Object id property: ", ids);

console.log("Now we are same object access by maf, fileter , find ");

//map apply 
const names = students.map(s => s.name);
console.log("map apply object name: ", names);
const idS = students.map(s => s.id);
console.log("map apply object id property :" , idS);

// filter apply

console.log("now apply filter ");
const big = students.filter(s => s.id > 30);
console.log("bigger of 30 Id: " ,big);

//find apply
console.log("now apply find ");
const bigOne = students.find(s => s.id > 30);
console.log("big one of 30 apply find: ", bigOne);

