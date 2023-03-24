const storageInput =  document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const paragraph = document.querySelector('.p');
const audio = new Audio('sfx/who.mp3')
storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})
//how it works  
button.addEventListener('click', updateButton);
function updateButton() 
    {
        let your_typing="";
    
    if (Month == January){
        if (Day <= 20){
        your_typing = "Bug";
        }
        else{
        your_typing = "Dark";
        }
    }
    else if (Month == February){
        if (Day <= 9){
        your_typing = "Dark";
        }
        else{
        your_typing = "Dragon";
        }
    }
    else if (Month == "March"){
        if (Day <= 21){
        your_typing = "ELectric";
        }
        else{
        your_typing = "Fairy";
        }
    }
    else if (Month == "April"){
        if (Day <= 10){
        your_typing = "Fairy";
        }
        else{
        your_typing = "Fighting";
        }
    }
    else if (Month == "May"){
        if (Day <= 20){
        your_typing = "Fire";
        }
        else{
        your_typing = "Flying";
        }
    }
    else if (Month == "June"){
        if (Day <= 9){
        your_typing = "Flying";
        }
        else{
        your_typing = "Ghost";
    }
    }
    else if (Month == "July"){
        if (Day <= 19){
            your_typing = "Grass";
        }
        }
        else{
        your_typing = "Ground";
        }
    
    else if (Month == "August"){
        if (Day <= 8){
        your_typing = "Ground";
        }
        }
        else {
        your_typing = "Normal";
        }
    
    else if (Month = "September"){
        if (Day <= 17){
        your_typing = "Normal"
        }
        else{
        your_typing = "Poison";
        }
    }
    else if (Month = "October"){
        if (Day <= 7){
        your_typing = "Poison";
        }
        if (Day >=8 ){
        your_typing = "Psychic";
        }
        else{
        your_typing = "Rock"
        }
    }
    else if (Month = "November"){
        if (Day <= 16){
        your_typing = "Rock";
        }
        else{
        your_typing = "Steel";
        }
    }
    else if (Month = "December"){
        if (Day <=6){
        your_typing = "Steel";
        }
        else{
        your_typing = "Water";
        }
    }
    document.write (your_typing);
    }