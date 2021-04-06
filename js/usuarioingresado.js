function cargarUsuario (){
    const usuario = JSON.parse(localStorage.getItem("usuariologueado"));
    if(usuario==="admin"){
        document.getElementById("navLogin").className="nav-item d-none"
        document.getElementById("navAdmin").className = "nav-item";
        document.getElementById("cerrarSesion").className="nav-item"
        console.log("desde usuario admin")
    }else if(usuario!="admin" && usuario!=null){
        document.getElementById("user").className="nav-item"
        document.getElementById("nombreUser").innerHTML=usuario
        document.getElementById("cerrarSesion").className ="nav-item"
        document.getElementById("navAdmin").className = "nav-item d-none";
        document.getElementById("navLogin").className="nav-item d-none"
        console.log("desde otro usuario")
     }
    else{
         console.log("por favor haga login")
         document.getElementById("navLogin").className="nav-item";
          document.getElementById("navAdmin").className="nav-item d-none";
           document.getElementById("cerrarSesion").className ="nav-item d-none"
           document.getElementById("user").className="nav-item d-none"
     }
}
cargarUsuario();    


window.cerrarSesion=function(){
    if(JSON.parse(localStorage.getItem("usuariologueado"))!="admin"){
        localStorage.removeItem("usuariologueado");
        document.getElementById("navLogin").className="nav-item";
        document.getElementById("navAdmin").className="nav-item d-none";
        document.getElementById("cerrarSesion").className="nav-item d-none";
        document.getElementById("user").className="nav-item d-none"
        console.log("sesion cerrada"); 
        location.href="index.html";
    }else if(JSON.parse(localStorage.getItem("usuariologueado"))==="admin"){
        localStorage.removeItem("usuariologueado");
        document.getElementById("navLogin").className="nav-item";
        document.getElementById("navAdmin").className="nav-item d-none";
        document.getElementById("cerrarSesion").className="nav-item";
        document.getElementById("user").className="nav-item d-none"
        console.log("sesion cerrada"); 
        location.href="index.html";
    }else if(JSON.parse(localStorage.getItem("usuariologueado"))===null)
    {
        document.getElementById("navLogin").className="nav-item ";
        document.getElementById("navAdmin").className="nav-item d-none";
        document.getElementById("cerrarSesion").className="nav-item";
        document.getElementById("user").className="nav-item d-none"
        console.log("sesion cerrada"); 
        location.href="index.html";
    
    }
}

