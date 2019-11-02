from pymongo import MongoClient
import datetime

client = MongoClient()
db = client.FindMe_database
collection = db.FindMe_collection
person = {
    "user": {
            "name":"First MIddle Last",
            "health": "Good\poor\medical attention",
            "hometown": "Iowa",
            "date of birth":"0/12/2",
            "camp": "camp",
            "looking" : "Yeee"},
    "date": datetime.datetime.utcnow()}
people = db.People
people_id = people.insert_one(person).inserted_id



