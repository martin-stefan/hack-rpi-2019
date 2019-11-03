def parse(fIle):
    file = open(fIle)
    file = file.read()
    file = file.split("\n")
    data = dict()
    num = 0
    for line in file:
        num+=1
        line = line.strip()
        person = line.split("|")
        if person[-1].find("&") != -1:
            search = person[-1].split("&")
            person.pop(-1)
            person.append(search)
        if person[1] == "":
            person[1] = "N/A"
        if person[1] != "N/A":
            name = "{} {} {}".format(person[0],person[1],person[2])
        else:
            name = "{} {}".format(person[0],person[2])
        if name not in data:
            data[name] = person[3:]
    return(data)
    

