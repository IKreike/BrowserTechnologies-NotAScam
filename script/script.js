console.log("hello world");

// required in het hidden formulier

uitklap = document.querySelector("#uitklap");
console.log(uitklap);

changeRequired1 = document.querySelector("#MoreForm1");
changeRequired2 = document.querySelector("#MoreForm2");
changeRequired3 = document.querySelector("#MoreForm3");
// console.log(changeRequired);

document.addEventListener("click", AddRequired);

// wanneer word deze functie geroepen? moet ergens voor de submit
// of kan het tijdens de submit?
function AddRequired() {
    if (uitklap.checked == true) {
        console.log("MoreForm");
        // add the required tag to uitgeklapt
        changeRequired1.setAttribute("required", "");
        changeRequired2.setAttribute("required", "");
        changeRequired3.setAttribute("required", "");
    } 
    else {
        changeRequired1.removeAttribute("required");
        changeRequired2.removeAttribute("required");
        changeRequired3.removeAttribute("required");
    }
}
// wat als jde javascript uit staat
// fieldset disabled overwrites the requirements. disable fieldset while hidden so not relable on js?
