  let pronombre = ["the", "our"];
  let adjetivo = ["great", "big"];
  let nombre = ["jogger", "racoon"];

  for (let i = 0; i < pronombre.length; i++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let e = 0; e < nombre.length; e++) {
        console.log(`${pronombre[i]}${adjetivo[a]}${nombre[e]}.com`);
      }
    }
  };
