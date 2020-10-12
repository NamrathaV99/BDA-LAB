use CustomerDB
//1. Create  a collection by name Customers with the following attributes.Cust_id, Acc_Bal, Acc_Type
db.createCollection("Customer")
//2. Insert at least 5  values into the table
db.Customer.insert({cust_id:1,Acc_bal:1500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:3000,Acc_type:"A"})
db.Customer.insert({cust_id:1,Acc_bal:1200,Acc_type:"A"})
db.Customer.insert({cust_id:3,Acc_bal:500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:1600,Acc_type:"Z"})
db.Customer.find()
//3. Write a query to display those records whose total account balance is greater than 1200 of  account type ‘Z’ for each customer_id.
db.Customer.find({Acc_bal:{$gt:1200}, Acc_type:"Z"})
//4. Determine Minimum and Maximum account balance for each customer_id.
db.Customer.aggregate([
    {
        $group: {
            _id: "$cust_id",
            min_bal: {$min: "$Acc_bal"},
            max_bal: {$max: "$Acc_bal"}
        }
    }
]);

//5. Export the created collection into local file system
mongoexport -d CustomerDB -c Customer -f cust_id,Acc_bal,Acc_type --type=csv -o Customer.csv
//6. Drop the table
db.Customer.drop()
//7. Import a given csv dataset from local file system into mongodb collection
mongoimport -d CustomerDB -c Customer --type csv --file Customer.csv --headerline