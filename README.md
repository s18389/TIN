# TIN
FINAL PROJECT README

IMPORTANT

Port: 1234

Main js: index.js

Description:
I have created single-page application based on MongoDB database.
Subject of this app is very simple car service management.

Database:
Database based on external MongoDB Atlas service. 
It has 3 main collections (tables).  

![0](https://user-images.githubusercontent.com/61834139/106397426-a32e3900-640d-11eb-975f-5838b8a2f009.jpg)

Each service has to have only one car, each car has to have only one owner (client).

Functionalities:
1.	Listing all records (documents) for each table (collection).
![1](https://user-images.githubusercontent.com/61834139/106397391-606c6100-640d-11eb-95ac-575fbdbe8cf3.jpg)
 
2.	Adding, editing and deleting each record.
![2](https://user-images.githubusercontent.com/61834139/106396855-d58a6700-640a-11eb-9e19-64456bb79430.jpg)
 
3.	Getting information of the car which is serviced if we click on a car id in the car service list. In the same way if we will click on the owner id in the car list, we will get information about the owner.
![3](https://user-images.githubusercontent.com/61834139/106397393-619d8e00-640d-11eb-9543-6f8162bc1367.jpg)

4.	Data validation – each data in each table is required by server at proper type (number, string). On the client side, data validation relies on max length and proper data type (date, number, text).

Technologies:
Backend: express,  handlebars, mongoose, path, body-parser
Frontend: Bootstrap
