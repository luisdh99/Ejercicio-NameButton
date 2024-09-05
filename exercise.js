const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("txtNombre")
const alertVal = document.getElementById("alertVal")


btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        //si el nombre supera o iguala la longitud no se despliega el display de block
        alertVal.innerHTML="";
        alertVal.style.display="none";

    if (txtNombre.value.length<2){
        alertVal.innerHTML="Error de entrada, no es correcto el nombre";
        alertVal.style.display="block";
        //agregar el return false
        return false;
    }

    //agregar el setItem relacionado  al nombre. siempre verificar el localstorage en la consola
    localStorage.setItem("Nombre", txtNombre.value);

});
