import { json } from "react-router-dom";

function UserData(...elements) {
  this.id =  elements[0];
  this.password = elements[1];
  this.email = elements[2];
  this.name = elements[3];
  this.phoneNumber = elements[4];
  this.gender = elements[5];
  this.category = elements[6];
  this.role = elements[7];
}

export function initUesrData(){
 let userArray = JSON.parse(localStorage.getItem("userData"));

  if(userArray == null || userArray.length === 0){
  userArray = new Array();
  console.log("initalize UserData");
  userArray.push(new UserData("admin", "1234", "test@gmail.com", "서윤오", "010-1234-5678", "male", "한식", "admin"));
  userArray.push(new UserData("user", "1234", "test@gmail.com", "황영진", "010-1234-5678", "male", "한식", "user"));
  localStorage.setItem("userData",JSON.stringify(userArray));
}
}

