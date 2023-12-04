// Milestone 0 creo l'Array contenente gli oggetti
let team=[
    {
        nome:"Wayne Bamett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        ruolo:"Office MaNAGER",
        foto:"walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela Lopex",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }  
]
//collegamento al dom
let info= document.getElementById("info");

// creao ul ciclo che mi legga tutti gli oggetti 
for (let i=0; i<team.length; i++){

    //creazione del div contenitore 
    let div = document.createElement("div")
    div.classList.add("m-5");
    div.classList.add("text-center");

    let image=`<img src="./img/${team[i].foto}" class="size_img"></img>`
    let name=`<h2> ${team[i].nome} </h2>`;
    let work=`<h4> ${team[i].ruolo} </h4>`;

    //inserimento della div creato nel dom 
    div.innerHTML=image+name+ work;
    info.appendChild(div)
}


