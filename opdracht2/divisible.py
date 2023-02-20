xnum = int(input("X > "))
ynum = int(input("Y > "))
output = ""

for i in range(0,100):
    if i % xnum == 0:
        if i % ynum == 0:
            print("FB")
            output += "FB "
        else:
            print("F")
            output += "F "
    elif i % ynum == 0:
        if i % xnum == 0:
            print("FB")
            output += "FB "
        else:
            print("B")
            output += "B "
    else:
        print(f"{i}")
        output += f"{i} "

with open("D:\site\opdracht2\output.txt","w+") as file:
    file.write(output)

