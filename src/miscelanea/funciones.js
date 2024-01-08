let keys=[];
export function keysUnicas(){
    let num=Math.random()*99999;
    while (keys.includes(num)){
        num=Math.random()*99999;
    }
    keys.push(num)
    return num;
}


export function crearMatriz(size, cantidadMinas) {
    let matriz=[];
    let contadorMinas=0;
    for (let x = 0; x < size; x++) {
        matriz.push([]);
        for (let y = 0; y < size; y++) {
            matriz[x].push(0);
        }
    }

    while (contadorMinas<cantidadMinas) {
        let x=Math.floor(Math.random()*size);
        let y=Math.floor(Math.random()*size);
        if(matriz[x][y]==0 && !(x==0 && y==0)){
            matriz[x][y]=1;
            contadorMinas++;
        }
        
    }
    return matriz;
}

export function distancias(matriz) {
    /*PLANTEAMIENTO: pregunto si la posi es 0, si lo es la distancia minima es 1
  y voy sumando distancias y preguntando si es 1 con la variable encontrado false. */
  //devo de crear una nueva matriz vacÃ­a para pasarle los nuevos valores
  let newmatriz = [];
  for (let fila = 0; fila < matriz.length; fila++) {
     //designo cols 
  
     newmatriz[fila] = [];
     for (let col = 0; col < matriz[fila].length; col++) {
         if (matriz[fila][col] == 1) {
             newmatriz[fila][col] = 1;
         } else {
             newmatriz[fila][col] = 0;
         }
     }
  }
  //recorro fila y columna
  for (let fila = 0; fila < matriz.length; fila++) {
     for (let col = 0; col < matriz[fila].length; col++) {
         //si el valor es 0
         if (matriz[fila][col] == 0) {
             let encontrado = false;
             let dist = 1;
             //X sea distinto de resultado, me lo ejecuta
              while (!encontrado) {
                 //con for me voy moviendo menos la distancia y hasta la distancia    
                 for (let k = fila - dist; k <= fila + dist; k++) {
                     for (let l = col - dist; l <= col + dist; l++) {
                         //Control no salirme****
                         if (k >= 0 && k < matriz.length && l >= 0 && l < matriz[fila].length) {
                             if (matriz[k][l] == 1) {
                                 newmatriz[fila][col] = dist + 1;
                                 encontrado = true;
                             }
                         }
                     }
                 }
                 dist++;
             }
         }
     }
  }
  return newmatriz;
  }