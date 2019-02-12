function entradaSaida(){
	var tamanho=0;
	tamanho = document.getElementById("demo").value;
	if(tamanho == ""){
	alert("Campo vazio!");
	}
	else if(isNaN(tamanho)){
	   alert("Entrada errada!");
	}
	document.getElementById("demo").value = "";


var cont=0;
var i,j,aux;
var arr=[];
	
for(i=0;i<tamanho;i++){
 arr[i] = Math.floor(Math.random() * 101);
} 
var inicio = new Date();
      for(i=0;i<tamanho;i++){
          for(j=0;j<tamanho-1-i;j++){
            if(arr[j] > arr[j+1]){
                cont++;
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
         }
        }
      }

var fim = new Date();
var total = (fim - inicio)/1000;
console.log("Ola");
//document.getElementById("troca").innerHTML = "Trocas: " + cont;
//document.getElementById("tempo").innerHTML = "Tempo: " + total.toFixed(3);


}




function refresh(){
	window.location.reload();
}