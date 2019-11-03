from pymongo import MongoClient
from parse import parse
import pprint

parsedict = list(parse('data.txt').values())
lookingfor = []
for i in range(0,len(parsedict)):
    lastindex = parsedict[i][-1]
    for x in range(len(lastindex)):
        lastisplit = lastindex[x].split(" ")
        lastname = lastisplit[-2]
        lookingfor.append(lastname)




#This part checks the last name vs the directory and writes the atches in a file
client = MongoClient('mongodb://test:test@cluster0-shard-00-00-8ieqc.gcp.mongodb.net:27017,cluster0-shard-00-01-8ieqc.gcp.mongodb.net:27017,cluster0-shard-00-02-8ieqc.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
db = client.FindMe
collection = db.FindMe
people = db.People
matches =[]
for lent in range(0,len(lookingfor)):
    findme = lookingfor[lent]
    for  person in people.find():
        a = person
        b = a.get('user')
        c = str(b.get('family name'))
        if c == findme:
            matches.append((b.get('name'),b.get('date of birth'),b.get('camp'),b.get('hometown')))

    file = open("matches.txt", 'w')
    writen = "Matches for {} \n ".format(findme)+"_"*20+"\n"
    file.write(writen)
    for i in range(0,len(matches)):
        temp = matches[i]
        name = temp[0]
        dob = temp[1]
        location = temp[2]
        town = temp[3]
        writen = (""+name+" "+town+" "+dob+" "+location+"\n")
        file.write(writen)
    file.close()
    matches=[]
    
