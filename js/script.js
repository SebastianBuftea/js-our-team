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

// creao ul ciclo che mi legga tutti gli oggetti 
for (let i=0; i<team.length; i++){
    // creo un ciclo che per ogni oggetto mi legga i paramentri 
    for (let key in team[i]) {
        console.log(team[i][key]);      
      } 
}
