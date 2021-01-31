# TIN
FINAL PROJECT README

Description:
I have created single-page application based on MongoDB database.
Subject of this app is very simple car service management.

Database:
Database based on external MongoDB Atlas service. 
It has 3 main collections (tables).  

Each service has to have only one car, each car has to have only one owner (client).

Functionalities:
1.	Listing all records (documents) for each table (collection).

 
2.	Adding, editing and deleting each record.
 
 
3.	Getting information of the car which is serviced if we click on a car id in the car service list. In the same way if we will click on the owner id in the car list, we will get information about the owner.
 

4.	Data validation – each data in each table is required by server at proper type (number, string). On the client side, data validation relies on max length and proper data type (date, number, text).

Technologies:
Backend: express,  handlebars, mongoose, path, body-parser
Frontend: Bootstrap
