// let userValue;
// console.log(a);
toDoList=[]
while((userValue=prompt("Enter your value"))!="q")
{
    toDoList.push(userValue);
    if(userValue==="list")
    {
        toDoList.pop();
        console.log(toDoList)
    }
     if(userValue==="delete"){
         toDoList.pop();
         let Vdelete=prompt("enter the value u want to delete")
         let newToDo=toDoList.filter(el=>el!=Vdelete);
         console.log(newToDo)

     }
}

