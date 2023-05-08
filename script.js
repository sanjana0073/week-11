document.getElementById("parent").innerHTML=("Something else");
document.getElementsById("parent").style.cssText=("background-color:red; color:white; text-align:centre")
document.getElementByClassName("exercise")[0].innerHTML=("I am index 0");
document.getElementsByTagName("h1")[1].innerHTML=("I am change");
document.querySelector("#ram").style.cssText=("background-color:aqua; color:blue;")
document.querySelector("#mili").style.cssText=("background-color:green; color:pink;")

const change=document.querySelectorAll("h2");
for(i=0;i<=change.length;i=++)