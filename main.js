const firebaseConfig = {
    apiKey: "AIzaSyBRLu-UZQuce1e2ZY5ui0zdgswsnI8CRM4",
    authDomain: "theta-ocean-236311.firebaseapp.com",
    databaseURL: "https://theta-ocean-236311-default-rtdb.firebaseio.com",
    projectId: "theta-ocean-236311",
    storageBucket: "theta-ocean-236311.appspot.com",
    messagingSenderId: "1045228638270",
    appId: "1:1045228638270:web:dff1234cb0bc8d2a45416f",
    measurementId: "G-W0KJCY8GC6"
  };
firebase.initializeApp(firebaseConfig);
function loginpage(){
    window.location.href="login.html"
}
function signuppage(){
  window.location.href="signup.html"

}

function adminlogin(){
  window.location.href='admin.html'
}
//function to upload image on the signup page
function uploadImg(){
  input=document.createElement('input')
  input.type='file'
  input.click();
  input.onchange=(e)=>{
    selectedfiles=e.target.files[0]
    reader=new FileReader();
    reader.readAsDataURL(selectedfiles)
    reader.onload=()=>{
      
      document.getElementById('img1').src=reader.result
    }

  }
}
function check(){
  $('.shopitem-list').on('change', function() {
    $('.shopitem-list').not(this).prop('checked', false);  
});
if (document.getElementById('male').checked==true) {
  document.getElementById('gender').innerHTML="male"
  
}else if(document.getElementById('female').checked==true){
  document.getElementById('gender').innerHTML="female"
}else{
  document.getElementById('gender').innerHTML=""
}
document.getElementById('gender').style.display="none"
// for (var i = 0;i <= 1; i++)
// {
//     document.getElementById(i).checked = false;
// }
// document.getElementById(id).checked = true;
}
//upload all data on firebase

function checkpassword(){
    
  firstname=document.getElementById('fname')
  lastname=document.getElementById('lname')
  email=document.getElementById('email')
  phonenumber=document.getElementById('pnumber')
 // password=document.getElementById('Cpassword').value
  gender=document.getElementById('gender').innerHTML
 // image=document.getElementById('img1').src
  if (document.getElementById('Cpassword').value!=document.getElementById('Npassword').value) {
    document.getElementById('Cpassword').style.backgroundColor="red"
    alert("password does not match")
  }
  else if(firstname.value==""){
    firstname.style.backgroundColor="red"

  }
  else if(lastname.value==""){
    lastname.style.backgroundColor="red"

  }
  else if(email.value==""){
    email.style.backgroundColor="red"

  }
  else if(phonenumber.value==""){
    phonenumber.style.backgroundColor="red"

  }
  else if(gender==""){
    alert("tick ur gender")

  }
  
  else{
    firstname.style.backgroundColor="white"
    lastname.style.backgroundColor="white"
    email.style.backgroundColor="white"
    phonenumber.style.backgroundColor="white"
    document.getElementById('Cpassword').style.backgroundColor="white"
    uploadfirebase();
  }
}
function uploadfirebase(){
  
  firstname=document.getElementById('fname').value
  lastname=document.getElementById('lname').value
  email=document.getElementById('email').value
  phonenumber=document.getElementById('pnumber').value
  password=document.getElementById('Cpassword').value
  gender=document.getElementById('gender').innerHTML
  image=document.getElementById('img1').src
  //checking passwords
 

  var obj={
    FIRSTNAME:firstname,
    LASTNAME:lastname,
    EMAIL:email,
    PHONENUMBER:phonenumber,
    GENDER:gender,
    PASSWORD:password,
    IMAGE:image
  }
  firebase.database().ref('/record/'+firstname).set(obj)
  alert("data saved")

}
function login(){
  emaillogin=document.getElementById('emailL').value
  passwordlogin=document.getElementById('passwordL').value
  firebase.database().ref("record").once("value",function(AllRecord){
          
    AllRecord.forEach(function(snapshot){
                   
        if(snapshot.val().EMAIL==emaillogin&&snapshot.val().PASSWORD==passwordlogin){
            //alert("successfull")
            window.location.href="welcom.html?meet="+emaillogin
            //window.location.href="welcome.html?meet="+id
        }
         })
})
    
}
function adminLogin(){
  username=document.getElementById('adminusername').value
  password=document.getElementById('adminpassword').value
  firebase.database().ref("record").once("value",(AllRecord)=>{
    AllRecord.forEach((snapshot)=>{
      if(snapshot.val().EMAIL==username&&snapshot.val().PASSWORD==password){
        //alert("successfull")
        window.location.href="mainadmin.html"
        //window.location.href="welcome.html?meet="+id
    }
    })
  

   })
  }
  // if(username=='admin123'&&password=="admin098"){
  //   window.location.href="mainadmin.html"
  // }else{
  //   alert("wrong password")
  // }
