let eredmeny = document.getElementById("eredmeny");
let eredmenyK10 = document.getElementById("eredmenyK10");

let dobasGomb = document.getElementById("dobasGomb");
let dobasK10 = document.getElementById("dobasK10");

let nevMezo = document.getElementById("nev");
let keMezo = document.getElementById("KE");
let teMezo = document.getElementById("TE");
let veMezo = document.getElementById("SP");
let epMezo = document.getElementById("KEB");
let fpMezo = document.getElementById("TEB");
let sfeMezo = document.getElementById("SPB");

let d6 = Math.floor(Math.random() * 6)+ 1;

dobasGomb.addEventListener("click", function(e) {
  // Véletlenszerű két hatoldalú kockadobás
 
  let dobas1 = Math.floor(Math.random() * 10) + 1;
  let dobas2 = Math.floor(Math.random() * 10) + 1;
  let dobas3 = Math.floor(Math.random() * 100) + 1;
  let dobas4 = Math.floor(Math.random() * 100) + 1;
  let dobas5 = Math.floor(Math.random() * 6) + 1;
  let dobas6 = Math.floor(Math.random() * 6)+ 1;
  let dobas7 = Math.floor(Math.random() * 6)+ 1;

  // Eredmény kiírása az oldalra
  eredmeny.innerHTML = "A D10 dobás eredménye: " + dobas1 + "<br>A D10 dobás eredménye: " + dobas2 + "<br>A D100 dobás eredménye; " + dobas3 +
   "<br>A D100 dobás eredménye; " +dobas4 +"<br>A D6 dobás eredménye; " +dobas5 +"<br>A D6 dobás eredménye; " +dobas6 + "<br>A D6 dobás eredménye; " +dobas7;
  //eredmenyK10.innerHTML = "<br>Az K10 dobás eredménye: ";
  
  document.getElementById("chuck").addEventListener("click", loadCharacter);

  function loadCharacter() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);
  
    xhr.onload = function() {
    if(this.status === 200){
     // console.log(this.responseText)
      const response = JSON.parse(this.responseText);
      // console.log(response.value);
      const output = `
        <ul>
        <li> Vicc: ${response.value}</li>
        </ul>
      `;
      // <li> Nev: ${karakter.charName}</li>
      // <li> KE: ${karakter.charKE} + ${dobas6}</li>
      // <li> TE: ${karakter.charTE}</li>
      // <li> VE: ${karakter.charVE}</li>
      // <li> FP: ${karakter.charFP}</li>
      // <li> EP: ${karakter.charEP}</li>
      // <li> SFE: ${karakter.charSFE}</li>
      document.getElementById("charMutat").innerHTML=output;
  
    }
  }
  xhr.send();}
// A Mutat gomb kattintásakor kiírjuk az értékeket
document.getElementById("mutatGomb").addEventListener("click", function() {
    document.getElementById("KEErtek").textContent = " " + (parseInt((document.getElementById("KE").value)) + dobas1);
    document.getElementById("TEErtek").textContent = " " + (parseInt((document.getElementById("TE").value)) + dobas3);
    document.getElementById("VEErtek").textContent = " " + (parseInt((document.getElementById("SP").value)) + dobas5);
    document.getElementById("EPErtek").textContent = " " + (parseInt((document.getElementById("KEB").value)) + dobas2);
    document.getElementById("FPErtek").textContent = " " + (parseInt((document.getElementById("TEB").value)) + dobas4);
    document.getElementById("SFEErtek").textContent = " " + (parseInt((document.getElementById("SPB").value)) + dobas6);

});
});

 document.getElementById("charBetolt").addEventListener("click", Karakterbetolt);

function Karakterbetolt() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/karakter/`, true);

  xhr.onload = function() {
  if(this.status === 200){
   // console.log(this.responseText)
    const karakter = JSON.parse(this.responseText);
    let output = '';
    
    karakter.forEach(function(karakter){
    output += `
   
      <ul>
      <li> Nev: ${karakter.charName}</li>
      <li> KE: ${karakter.charKE} + ${d6}</li>
      <li> TE: ${karakter.charTE}</li>
      <li> VE: ${karakter.charVE}</li>
      <li> FP: ${karakter.charFP}</li>
      <li> EP: ${karakter.charEP}</li>
      <li> SFE: ${karakter.charSFE}</li>
      </ul>
    `;
     
    });
      
     document.getElementById("charBetoltott").innerHTML=output;
  };

  }
  xhr.send();
}

document.getElementById("egykari").addEventListener("click", loadCharacteR);

  function loadCharacteR(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/karakter/${d6}`, true);
  
    xhr.onload = function() {
    if(this.status === 200){
     //console.log(this.responseText)
     let karakter = JSON.parse(this.responseText);
      // const response =;
      // console.log(response.value);
      const output = `
        <ul>
        <li> Nev: ${karakter.charName}</li>
        <li> KE: ${karakter.charKE} + ${d6}</li>
        <li> TE: ${karakter.charTE}</li>
        <li> VE: ${karakter.charVE}</li>
        <li> FP: ${karakter.charFP}</li>
        <li> EP: ${karakter.charEP}</li>
        <li> SFE: ${karakter.charSFE}</li>
        
        </ul>
      `;
     
      document.getElementById("egykar").innerHTML=output;
  
  
    }
  }
  xhr.send();}

// dobasK10.addEventListener("click", function() {
//     let dobasK10 = Math.floor(Math.random() * 10) + 1  
// eredmenyK10.innerHTML = "<br>Az K10 dobás eredménye: "+ dobasK10});

//Igy kell feltoltest csinalni

let anyad = {
      "charName": "",
      "charKE": 0,
      "charTE": 0,
      "charVE": 0,
      "charFP": 0,
      "charEP": 0,
      "charSFE": 0
}

function createKarakter(){
 anyad.charName = document.getElementById("charName").value
 anyad.charKE = document.getElementById("charKE").value
 anyad.charTE = document.getElementById("charTE").value
 anyad.charVE = document.getElementById("charVE").value
 anyad.charFP = document.getElementById("charFP").value
 anyad.charEP = document.getElementById("charEP").value
 anyad.charSFE = document.getElementById("charSFE").value
console.log(anyad)

}

document.getElementById("feltoltGomb").addEventListener("click", karakterFeltoltes);

function karakterFeltoltes(){
   createKarakter()

  fetch('http://localhost:3000/karakter', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(anyad)})
    .then(function(response) {
        return response.json()
        })
        .then(function(json) {
        console.log('parsed json: ', json)
        })
        .catch(function(ex) {
        console.log('parsing failed: ', ex)
        });

     // location.reload();
    
      }
      // gyakorlas
      fetch('http://localhost:3000/karakter',{
        method: 'GET',
        body: JSON.stringify
      })
      .then(response => {
        if (response.ok){
          console.log("megy")}
          else{
            console.log("nem jo")}
          })
      .then(data => console.log(data))
      .catch(err => console.log(err))
      
      
      
      
      
      // ,{
      //   Method: 'POST',
      //   Headers: {
      //     Accept: 'application.json',
      //     'Content-Type': 'application/json'
      //   },
      //   Body: body,
      //   Cache: 'default'
      // })
      //     .then(response => {
      //   //handle response            
      //   console.log(response);
      // })
      // .then(data => {
      //   //handle data
      //   console.log(data);
      // })
      // .catch(error => {
      //   //handle error
      // });

