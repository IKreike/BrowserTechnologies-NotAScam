console.log("hello world");


// // json loading?
// // https://stackoverflow.com/questions/7346563/loading-local-json-file
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// const dataToelichting = fetch("ExtraInfo.json")
//   .then(response => response.json())
//   .then(json => console.log(json))
//   ;
//   console.log(json)
//   console.log(dataToelichting);

// async function printJSON() {
//     const response = await fetch("test.json");
//     const json = await response.json();
//     console.log(json);
// }

// required in het hidden formulier

uitklap = document.querySelector("#uitklap");
console.log(uitklap);


// fieldset1b2 = document.querySelector("#fieldset1b2");
// fieldset1b3 = document.querySelector("#fieldset1b3");
// fieldset1b4 = document.querySelector("#fieldset1b4");
changeRequired1 = document.querySelector("#MoreForm1");
changeRequired2 = document.querySelector("#MoreForm2");
changeRequired3 = document.querySelector("#MoreForm3");
// console.log(changeRequired);

fieldset1b1 = document.querySelector("#fieldsetUitklap");

fieldset1b1.addEventListener("click", AddRequired);

// Deze functie word geroepen als er interactie is met de fieldset die het uitklappen beslist (1b1)
function AddRequired() {
    console.log("requirements updated")
    if (uitklap.checked == true) {
        console.log("MoreForm");
        // add the required tag to uitgeklapt
        changeRequired1.setAttribute("required", "");
        changeRequired2.setAttribute("required", "");
        changeRequired3.setAttribute("required", "");


        // fieldset1b2.disabled = false;
        // fieldset1b3.disabled = false;
        // fieldset1b4.disabled = false;

    } 
    else {
        changeRequired1.removeAttribute("required");
        changeRequired2.removeAttribute("required");
        changeRequired3.removeAttribute("required");

        // fieldset1b2.disabled = true;
        // fieldset1b3.disabled = true;
        // fieldset1b4.disabled = true;

    }
}
// wat als jde javascript uit staat
// fieldset disabled overwrites the requirements. disable fieldset while hidden so not relable on js?

// van wat ik kan zien, kan je alleen requirements aan en uitzetten met js dus is mijn huidige oplossing beter?
// Ik kan we in plaat van de requirements weghalen de fieldsets disabelen, omdat dat technish gezien minder code is
// as it turns out it is not less code, it is exactly the same

// i think this only made the problem worse because now without js there is no way to fill in the complete form.


// tips form Jeremy (not all browesers support this?)
// check in the start if the browser if it is possible other wise gtfo

// put in info
// formdata API (grab all formfields on the form)
// when? (pagehide event?)
// json stringify ->localstorage API


// retrieve info
// dom content loaded event
// reverse 
// check localstorage API
// json parse
// queryselector?


// form headache: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
const form = document.getElementById("form");
document.addEventListener("click", getFormData);
// const output = document.getElementById("output");

function getFormData(){
    // FormData()
    // FormData.getAll()

    const Formdata = new FormData(form);
    // FormData.append()
    // FormData.getAll(InputDeviceInfo);
    console.log(Formdata)
    const TextData = JSON.stringify(Formdata)
    localStorage.setItem("data", TextData);


    // for (const [key, value] of Formdata) {
    //     output.textContent += `${key}: ${value}\n`;
    //   }
}

window.addEventListener("load", LoadData);

function LoadData(){
    const loadedInfo = localStorage.getItem("data");
    const NonTextData = JSON.parse(loadedInfo)
    console.log(NonTextData);
    // now to put it back in the documetn
}


// help section logic- written out
// each section needs its own text in the help section.
// some chapters have different help-points

// i could update  the content with css 
// I think it would be nice to get the data with javascript though
// So: the helps section (and the information links) should only be visible if the javascript is working

// well shit



toelichtingSection = document.querySelector("#toelichting")

ToelichtingKnop = document.querySelector("#verrekenbedingToelichting")
ToelichtingKnop.addEventListener("click", updateToelichting)

// use this to add the (right amount) of content?
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement


function updateToelichting(){
    console.log(this.id);
    // console.log(json);
    // voor elk ding in een array in een json?: 

    // maak een element aan 
    // const newElement = document.createElement("(soort element)");

    // maak content aan
    // const newContent = document.createTextNode("(tekst van de array)");

    // stop de content in het element
    // newElement.appendChild(newContent);

    // selecteer een element (die al in de html staat)
    // const currentDiv = document.getElementById("div1");
    // zet de content ervoor in(in mijn geval misschien handiger dat het erna is, en let op de volgorde want het draait om als je meerdere keren het script draait)
    // document.body.insertBefore(newDiv, currentDiv);
}