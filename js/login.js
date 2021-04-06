import{listaUsuarios} from "./ValidacionesRegistro.js"


window.validarUsuario =function (input){
    if (input.value.trim() != "") {
      input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
window.validarPassword=function (pass){
  if (pass.value.trim() != "" && pass.value.length >= 6) {
    pass.className = "form-control is-valid";
    return true;
  } else {
    pass.className = "form-control is-invalid";
    return false;
  }
}

//funcion para validar usuarios y contraseñas existentes
function checkLog(){
  const user = listaUsuarios.find((usuario)=> usuario.usuario === document.getElementById("usuario").value);
  const pass = listaUsuarios.find((usuario)=> usuario.password === document.getElementById("password").value);
  console.log(user)
      if (user && pass){
         console.log(user.usuario),
         console.log(user.password)
        document.getElementById('usuario').className = 'form-control is-valid';
        document.getElementById('password').className = 'form-control is-valid';
        return true;
      }
      if(user && typeof pass=="undefined"){
        
        document.getElementById('usuario').className = 'form-control is-valid';
        document.getElementById('password').className = 'form-control is-invalid';
       document.getElementById('feedbackPassword').innerHTML= 'Contraseña incorrecta'; 
        return false;
      }else{
        document.getElementById("usuario").className = 'form-control is-invalid'; 
        document.getElementById('feedbackUser').innerHTML= 'El usuario ingresado no existe, por favor registrese';   
        return false;
}
}

window.validacionLogin= function (event){
  event.preventDefault();
  
  if (validarUsuario(document.getElementById('usuario'))===true &&
    validarPassword(document.getElementById('password'))===true && checkLog()===true
    ){
      let usuarioLogueado = listaUsuarios.find((usuario)=>usuario.usuario ===document.getElementById("usuario").value  && usuario.password===document.getElementById("password").value);
      if(usuarioLogueado && document.getElementById("usuario").value ==="admin"){
        localStorage.setItem("usuariologueado", JSON.stringify(document.getElementById("usuario").value));
        location.href="admin.html"
  console.log("logueando admin");

       }else if(usuarioLogueado && document.getElementById("usuario").value !="admin"){
        localStorage.setItem("usuariologueado", JSON.stringify(document.getElementById("usuario").value));
        location.href="index.html"
        console.log("logueando usuario");
      }
    }
    
  }
  