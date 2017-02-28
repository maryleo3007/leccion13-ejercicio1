function mostrarDatos(event){
    event.preventDefault();
    var inputs = document.getElementsByClassName("input");
    var nombre = document.getElementById('txt_nombre');
    var apellido = document.getElementById('txt_apellido');
    var dni = document.getElementById('txt_dni');
    var direccion  = document.getElementById('txt_direccion');

    document.getElementById('mostrar').innerHTML = "<ul><li> Nombre: "+nombre.value+ "<br>"+"<li> Apellido : "+apellido.value+"<br>"+"<li> DNI : "+dni.value+"<br>"+"<li> Direccion : "+direccion.value+"</ul><br>";

  }
