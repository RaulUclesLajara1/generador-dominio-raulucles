let pronoun = ['el','mi','un','tu'];

let adj = ['gran', 'magico','tenebroso','duro'];

let noun = ['gato', 'rinoceronte','armario','cojin'];

let extensiones = ['.com', '.es', '.net','.org'] 
let nombre_dominio;

for(let i=0;i<pronoun.length;i++){
  let pronombre=pronoun[i];

  for(let j=0; j<adj.length;j++){
    let adjetivo=adj[j];
      
    for(let k=0;k<noun.length;k++){
      let sustantivo=noun[k]
      let extension=extensiones[Math.floor(Math.random()*4)]
      console.log(pronombre+adjetivo+sustantivo+extension)
      }
    }
  }


