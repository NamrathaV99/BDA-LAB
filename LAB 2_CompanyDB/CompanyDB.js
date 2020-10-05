use Company
db.createCollection("Employee")
db.createCollection("Department")
show collections

//1. Insert 5 documents 
db.Employee.insertMany([{_id:1,Name:"Nam",Dnumber:1001,Age:21,Title:"Manager"},
                        {_id:2,Name:"Amy",Dnumber:2001,Age:45,Title:"Clerk"}])
db.Employee.update({_id:3,Name:"Penny",Dnumber:1001,Age:21},{$set:{Title:"SE"}},{upsert:true})
db.Employee.update({_id:4,Name:"Leo",Dnumber:3001,Age:25},{$set:{Title:"SDET"}},{upsert:true})
db.Employee.save({_id:5,Name:"Ana",Dnumber:1001,Age:30,Title:"Manager"})

db.Department.insertMany([{Dnumber:1001,Name:"R&D"},
                          {Dnumber:2001,Name:"IT"}])
db.Department.update({Dnumber:3001},{$set:{Name:"HR"}},{upsert:true})
db.Department.update({Dnumber:4001},{$set:{Name:"Test"}},{upsert:true})
db.Department.save({Dnumber:5001,Name:"Training"})

//2.Update Employee collection to add new field to an existing document
db.Employee.update({_id:1},{$set:{Sex:"Female"}})

//3.Remove a field from an existing document
db.Employee.update({_id:1},{$unset:{Sex:"Female"}})

//4.Select all documents from both collections.
db.Employee.find({})
db.Department.find({})

//5.Select only employee name and department number whose department number falls between 1001 to 1005
db.Employee.find({Dnumber:{"$gt":1000,"$lt":1005}},{Name:true,Dnumber:true})

//6.Select employee documents whose name begins with "A"
db.Employee.find({Name:{$regex:"^A"}})

//7.Select employee document s whose age is greater than 30
db.Employee.find({Age:{"$gt":30}})
















