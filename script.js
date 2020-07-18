 
 // no 1
 var i=10;
 while(i>0){
 var reminder= i % 2;
 switch (reminder) {      
    case (0):                         
        console.log(' even '+i);         
        break;
    default:                        
       console.log('odd '+i);
       
} 
i--;
 }
 console.log("################");

//no 2
 for(i=1;i<=7;i++){
   
 switch (i) {
  
  case 1:
     day="monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    case 7:
    day = "sunday";
}
console.log(day);

 }
 