import { mockData } from "./data/mockData.js";
import {flags} from './data/flags.js';
import {numberImages} from './data/numberImages.js';

const driversContainer = document.querySelector('.drivers-container');
const drivers = [...mockData.sort((a,b) => b.points - a.points)];


drivers.forEach((driver,index) =>{
    const {hex,image,number,points,firstName,lastName,team} = driver;
    
    driversContainer.innerHTML += `<div  class="driver-card">
            <div style="--custom-color:${hex};"class='custom-border'></div>
            <div class="points-section">
                <p>${index + 1}</p>
                <div class='points-container'>
                    <div class="points">
                        <p>${points}</p>
                        <p>PTS</p>
                    </div>
                    <button style="--custom-color:${hex};" class="add-points">+</buton>
                </div>
            </div>
            <div class="name-section">
                <div class="name">
                    <p>${firstName}</p>
                    <p class="lastName">${lastName}</p>
                    <div style="background:${hex}" class='name-border'></div>
                </div>
                <img src=${flags[index]}/>
            </div>
            <div class="team">${team}</div>
            <div class="driver-section">
                <img class="driver" src=${image}/>
                <img class="number" src=${numberImages[index]}/>
            </div>
        </div>`
   
      
})

const btns = driversContainer.querySelectorAll('.add-points');
btns.forEach(btn =>{
    btn.addEventListener("click",function(e){
       const score = e.target.parentElement.querySelector('.points p:first-child');
       score.textContent = +score.textContent + 1;
    })
});