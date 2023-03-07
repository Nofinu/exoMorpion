import { poserUneQuestion } from "../tools/tools.js";

export class Ihm{
  constructor(){
    this.gametable=[[" "," "," "],[" "," "," "],[" "," "," "]]
    this.victory=false
  }

  async menu(){
    let choixX
    let choixY
    let compteur=0
    this.affichageTableau()
    do{
      console.log("tour de :",compteur%2 ?"O" :"X")
      choixX = await poserUneQuestion("\n\nentrer la valeur de la ligne :")
      if(+choixX === -1){
        compteur=15
      }
      choixY = await poserUneQuestion("\n\nentrer la valeur de la colone :")

      if(choixX<4 && choixX>0 && choixY<4 && choixY>0){
        if(this.gametable[Number(choixX)-1][Number(choixY)-1] === " "){
          this.gametable[Number(choixX)-1][Number(choixY)-1] = compteur%2 ?"O" :"X"
          this.affichageTableau()
          compteur++
          this.testWin(Number(choixX)-1,Number(choixY)-1)
        }
      }

    }while(compteur<10 && this.victory!=true)
    this.affichageTableau()
    }

    affichageTableau(){
      console.log("\n\n1 | 2 | 3")
      this.gametable.forEach(tab =>{
        console.log("_________")
        console.log(tab[0],"|",tab[1],"|",tab[2])
      })
    }

    testWin(ligne,colone){
      this.testEnLigne(ligne)
      this.testColone(colone)
      this.testDiago()
    }

    testEnLigne(ligne){
      console.log(this.gametable[ligne][0] === this.gametable[ligne][1] === this.gametable[ligne][2])
      if(this.gametable[ligne][0] === this.gametable[ligne][1] === this.gametable[ligne][2] && this.gametable[ligne][0]!== " "){
        console.log("testligne")
        this.victory=true
      }
    }
    testColone(colone){
      if(this.gametable[0][colone] === this.gametable[1][colone] === this.gametable[2][colone] && this.gametable[0][colone] !==" "){
        console.log("testcolone")
        this.victory=true
      }
    }
    testDiago(){
      if(this.gametable[0][0] === this.gametable[1][1] === this.gametable[2][2] && this.gametable[0][0] !==" "){
        console.log("testdiago")
        this.victory=true
      }
      if(this.gametable[0][2] === this.gametable[1][1] === this.gametable[2][0] && this.gametable[1][1] !==" "){
        console.log("testdiago2")
        this.victory=true
      }
    }
  }

