// const leadForm = document.getElementById("leadForm")
// const popup = document.getElementById("popup")
// const closePopup = document.getElementById("closePopup")

// leadForm.addEventListener("submit", (ev) => {
//     ev.preventDefault()

//     const leadName = document.getElementById("leadName").value
//     const leadEmail = document.getElementById("leadEmail").value
//     const leadWhatsapp = document.getElementById("leadWhatsapp").value

    
//     document.getElementById("popupName").innerText = leadName
//     document.getElementById("popupEmail").innerText = leadEmail
//     document.getElementById("popupWhatsapp").innerText = leadWhatsapp

//     // Exibir o popup
//     popup.style.display = "flex"
// })


// closePopup.addEventListener("click", () => {
//     popup.style.display = "none"
// })


// window.addEventListener("click", (event) => {
//     if (event.target === popup) {
//         popup.style.display = "none"
//     }
// })



let leadWhatsapp = document.getElementById("leadWhatsapp");

leadWhatsapp.addEventListener("keyup", formatarTelefone);
function formatarTelefone(e){

var v=e.target.value.replace(/\D/g,"");

v=v.replace(/^(\d\d)(\d)/g,"($1) $2"); 

v=v.replace(/(\d{5})(\d)/,"$1 - $2");    

e.target.value = v;
}