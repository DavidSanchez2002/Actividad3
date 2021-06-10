let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('titulo');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			//capa.innerText ="Agenda cargada";
			generarTabla();
			
		}
		else {
			capa.innerText = ajax.status+"Error AJAX, no se puede obtener la agenda";
		}
	}
}

function loadlista() {
	ajax.open("GET", "agenda.json");
    ajax.send();
}




function generarTabla() {
	
    let i;
    
    let textJson = ajax.responseText;
    let table="<tr><th>GENERO</th><th>NOMBRE</th><th>AUTOR</th><th>PASILLO</th><th>FILA</th><th>COLUMNA</th><th>NUMERO</th></tr>";
    let obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) {
	
	table += '<tr class="'+obj[i].autor+'"><td>' +
	            obj[i].genero +
	            '</td><td>' +
	            obj[i].nombre +
	            '</td><td>' +
	            obj[i].autor +
	            '</td><td>' +
	            obj[i].localizacion.pasillo +
	            '</td><td>' +
	            obj[i].localizacion.fila +
	            '</td><td>' +
	            obj[i].localizacion.columna +
	            '</td><td>' +
	            obj[i].localizacion.numero +
	            '</td></tr>';
    }//cierra for

    document.getElementById("demo").innerHTML = table;
       cambiarColor();

}//cierra funcion generarTabla()
function cambiarColor(){
	
			
			let a = document.getElementsByClassName("J. K. Rowling");
			let b = document.getElementsByClassName("J.R.R.Tolkien");
			let c = document.getElementsByClassName("Miguel de Cervantes");
			let d = document.getElementsByClassName("Antoine de Saint-Exupéry");
			let e = document.getElementsByClassName("Dan Brown");
			let f = document.getElementsByClassName("Robert, Bonansinga, Jay Kirkman");

			let i;
			for (i = 0; i < a.length; i++) {
			  a[i].style.backgroundColor = "#F2D682";
			};
			for (i = 0; i < b.length; i++) {
			  b[i].style.backgroundColor = "#EFF37E";
			};
			for (i = 0; i < c.length; i++) {
			  c[i].style.backgroundColor = "#A8F895";
			};
			for (i = 0; i < d.length; i++) {
			  d[i].style.backgroundColor = "#B4A1F3";
			};
			for (i = 0; i < e.length; i++) {
			  e[i].style.backgroundColor = "#A5F4D7";
			};
			for (i = 0; i < f.length; i++) {
			  f[i].style.backgroundColor = "#F3C5F7";
			};







}//cierra funcion cambiarColor()


function autor(autor) {
	let table= "";
    let i;
  
    let textJson = ajax.responseText;
    table="<tr><th>GENERO</th><th>NOMBRE</th><th>AUTOR</th><th>PASILLO</th><th>FILA</th><th>COLUMNA</th><th>NUMERO</th></tr>";
    let obj = JSON.parse(textJson);
    
    for (i = 0; i <obj.length; i++) {
    	
	if(obj[i].autor==autor){

	table += '<tr class="'+obj[i].autor+'"><td>' +
	            obj[i].genero +
	            '</td><td>' +
	            obj[i].nombre +
	            '</td><td>' +
	            obj[i].autor +
	            '</td><td>' +
	            obj[i].localizacion.pasillo +
	            '</td><td>' +
	            obj[i].localizacion.fila +
	            '</td><td>' +
	            obj[i].localizacion.columna +
	            '</td><td>' +
	            obj[i].localizacion.numero +
	            '</td></tr>';
	    
    }//cierra if
   
}//cierra for

    document.getElementById("demo").innerHTML = table;
       cambiarColor();
}//cierra funcion autor(autor)

function pruebas(){
	alert("entro");
	let a = '<a href="#"  onclick="generarTabla()">Todos</a>';
	let nose = document.getElementsByClassName("enlaze");
	nose[0].innerHTML=a;
}








/*if (obj[i].autor == "J.R.R.Tolkien"){
			
            	table += "<tr style='background-color: #F2D682;'><td>" +
	            obj[i].genero +
	            "</td><td>" +
	            obj[i].nombre +
	            "</td><td>" +
	            obj[i].autor +
	            "</td><td>" +
	            obj[i].localizacion.pasillo +
	            "</td><td>" +
	            obj[i].localizacion.fila +
	            "</td><td>" +
	            obj[i].localizacion.columna +
	            "</td><td>" +
	            obj[i].localizacion.numero +
	            "</td></tr>";

            }else if (obj[i].autor == "J. K. Rowling"){

	        	table += "<tr style='background-color: #EFF37E'><td>" +
	            obj[i].genero +
	            "</td><td>" +
	            obj[i].nombre +
	            "</td><td>" +
	            obj[i].autor +
	            "</td><td>" +
	            obj[i].localizacion.pasillo +
	            "</td><td>" +
	            obj[i].localizacion.fila +
	            "</td><td>" +
	            obj[i].localizacion.columna +
	            "</td><td>" +
	            obj[i].localizacion.numero +
	            "</td></tr>";

            }else if (obj[i].autor == "Miguel de Cervantes"){

	        	table += "<tr style='background-color: #A8F895'><td>" +
	            obj[i].genero +
	            "</td><td>" +
	            obj[i].nombre +
	            "</td><td>" +
	            obj[i].autor +
	            "</td><td>" +
	            obj[i].localizacion.pasillo +
	            "</td><td>" +
	            obj[i].localizacion.fila +
	            "</td><td>" +
	            obj[i].localizacion.columna +
	            "</td><td>" +
	            obj[i].localizacion.numero +
	            "</td></tr>";

            }else if (obj[i].autor == "Antoine de Saint-Exupéry"){

	        	table += "<tr style='background-color: #EFD9FB'><td>" +
	            obj[i].genero +
	            "</td><td>" +
	            obj[i].nombre +
	            "</td><td>" +
	            obj[i].autor +
	            "</td><td>" +
	            obj[i].localizacion.pasillo +
	            "</td><td>" +
	            obj[i].localizacion.fila +
	            "</td><td>" +
	            obj[i].localizacion.columna +
	            "</td><td>" +
	            obj[i].localizacion.numero +
	            "</td></tr>";

            }else if (obj[i].autor == "Dan Brown"){

	        	table += "<tr style='background-color: #A5F4D7'><td>" +
	            obj[i].genero +
	            "</td><td>" +
	            obj[i].nombre +
	            "</td><td>" +
	            obj[i].autor +
	            "</td><td>" +
	            obj[i].localizacion.pasillo +
	            "</td><td>" +
	            obj[i].localizacion.fila +
	            "</td><td>" +
	            obj[i].localizacion.columna +
	            "</td><td>" +
	            obj[i].localizacion.numero +
	            "</td></tr>";

            }*/


            /*if (obj[i].autor == "J. K. Rowling"){
            	table.td.style.backgroundcolor= 'lightgreen';
            }else{
            	table.td.style.backgroundcolor= 'white';
            }*/

