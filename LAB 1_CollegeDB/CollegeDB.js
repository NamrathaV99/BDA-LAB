show dbs

use College 
db

db.createCollection("Student");
db.createCollection("Faculty");
db.createCollection("COE");
db.createCollection("Library");
db.createCollection("Admission");
db.createCollection("CollegeFest");
show collections

db.Student.insertMany([{usn:1,Name:"Nam",Department:"CSE",Sem:7,CGPA:9.7,Elective:"BDA"},
                   {usn:2,Name:"Amy",Department:"ISE",Sem:6,CGPA:9.1,Elective:"ML"},
                   {usn:3,Name:"Penny",Department:"EC",Sem:4,CGPA:8.9,Elective:"OS"},
                   {usn:4,Name:"Shelly",Department:"ETE",Sem:5,CGPA:9.5,Elective:"C++"}]);
db.Student.find()
                   
db.Faculty.insertMany([{_id:1,Name:"Sheldon",Department:"CSE",Designation:"Professor",email:"sheldon@gmail.com",PhNo:9844031788},
                   {_id:2,Name:"Leo",Department:"ISE",Designation:"Assistant Professor",email:"leo@gmail.com",PhNo:9844131788},
                   {_id:3,Name:"Raj",Department:"EC",Designation:"Professor",email:"raj@gmail.com",PhNo:9844231788},
                   {_id:4,Name:"Ric",Department:"ETE",Designation:"Professor",email:"ric@gmail.com",PhNo:9844331788}]);
db.Faculty.find()

db.COE.insertMany([{_id:1,Name:"Joey",Department:"CIE",email:"joey@gmail.com",PhNo:9844031888,Address:"Jayanagar"},
                   {_id:2,Name:"Ross",Department:"SEE",email:"ross@gmail.com",PhNo:9844131888,Address:"BSK"},
                   {_id:3,Name:"Chandler",Department:"Fasttrack",email:"chandler@gmail.com",PhNo:9844231888,Address:"Basavangudi"},
                   {_id:4,Name:"Monica",Department:"SEE",email:"monica@gmail.com",PhNo:9844331888,Address:"KR Road"}]);
db.COE.find()
                 
db.Library.insertMany([{_id:1,BookName:"Mahabharata",BookNum:100,Author:"Vyasa",Department:"History",NoOfCopies:1000},
                   {_id:2,BookName:"Computer Networks",BookNum:1002,Author:"Farouzan",Department:"Computer Science",NoOfCopies:10},
                   {_id:3,BookName:"Number Theory",BookNum:112,Author:"David Burton",Department:"Mathematics",NoOfCopies:15},
                   {_id:4,BookName:"Digital Communication",BookNum:206,Author:"Simon",Department:"Telecommunication",NoOfCopies:5}]);
db.Library.find()

db.Admission.insertMany([{_id:1,Name:"Nam",Department:"CSE",Type:"CET",SSLC:97.44,PU:97},
                   {_id:2,Name:"Amy",Department:"ISE",Type:"COMEDK",SSLC:93,PU:90},
                   {_id:3,Name:"Penny",Department:"EC",Type:"Management",SSLC:80,PU:75},
                   {_id:4,Name:"Shelly",Department:"ETE",Type:"CET",SSLC:97,PU:96}]);
db.Admission.find()

db.CollegeFest.insertMany([{_id:1,Event:"Dance",Type:"Cultural",Coordinator:"Penny",Department:"EC",Date:01-08-2020},
                   {_id:2,Event:"Quiz",Type:"Academic",Coordinator:"Amy",Department:"ISE",Date:01-08-2020},
                   {_id:3,Event:"Treasure Hunt",Type:"Fiction",Coordinator:"Nam",Department:"CSE",Date:02-08-2020},
                   {_id:4,Event:"Singing",Type:"Cultural",Coordinator:"Shelly",Department:"ETE",Date:02-08-2020}]);
db.CollegeFest.find()