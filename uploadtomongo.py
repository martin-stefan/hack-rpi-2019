from pymongo import MongoClient
import datetime
from parse import parse

def clusterAdd(dict1):
    element1 = dict1[0].split(" ")
    lastname = element1[-1]
    person = {
    "user": {
        "name": dict1[0],
        "health": "Good\poor\medical attention",
        "hometown": dict1[2],
        "date of birth": dict1[1],
        "camp": dict1[3],
        "family name" : lastname},
    "date": datetime.datetime.utcnow()}
    people_id = people.insert_one(person).inserted_id

#mongodb://db1.example.net:27017,db2.example.net:2500/?replicaSet=test

client = MongoClient('mongodb://test:test@cluster0-shard-00-00-8ieqc.gcp.mongodb.net:27017,cluster0-shard-00-01-8ieqc.gcp.mongodb.net:27017,cluster0-shard-00-02-8ieqc.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
db = client.FindMe
collection = db.FindMe
people = db.People
dictlist = []

parsedictv = list(parse('example.txt').values())
parsedictk = list(parse('example.txt').keys())
parsedict =[]
for i in range (0,len(parsedictv)):
    k = []
    k.append(parsedictk[i])
    parsedict.append(k + parsedictv[i])
dictlist = []
for i in range(0,len(parsedict)):
    threeVal = parsedict[i][0:-1]
    dictlist.append(threeVal)




for i in range(0,len(dictlist)):
    clusterAdd(dictlist[i])


