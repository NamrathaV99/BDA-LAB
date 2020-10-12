use StudentDB
//1. Create a database “Student” with the following attributes  Rollno, Age, ContactNo, Email-Id
db.createCollection("Student")
//2. Insert appropriate values
db.Student.insertMany([{RollNo:10,Age:21,Name:"Nam",ContactNo:9482141788,EmailId:"nam@gmail.com"},
                       {RollNo:11,Age:25,Name:"ABC",ContactNo:9482141778,EmailId:"abc@gmail.com"},
                       {RollNo:12,Age:30,Name:"Amy",ContactNo:9482141766,EmailId:"amy@gmail.com"},
                       {RollNo:13,Age:21,Name:"Penny",ContactNo:9482141755,EmailId:"penny@gmail.com"},
                       {RollNo:14,Age:26,Name:"Leo",ContactNo:9442141788,EmailId:"leo@gmail.com"}]);
db.Student.find()
//3. Write query to update Email-Id of a student with rollno 10
db.Student.update({RollNo:10},{$set:{EmailId:"namratha@gmail.com"}});  
db.Student.find({RollNo:10})
//4. Replace the student name from “ABC” to “FEM” of rollno 11
db.Student.update({RollNo:11},{$set:{Name:"FEM"}});  
db.Student.find({RollNo:11})
//5. Export the created table into local file system
mongoexport -d StudentDB -c Student -f RollNo,Age,Name,ConatctNo,EmailId --type=csv -o Student.csv
//6. Drop the table
db.Student.drop()
//7. Import a given csv dataset from local file system into mongodb collection
mongoimport -d StudentDB -c Student --type csv --file Student.csv --headerline