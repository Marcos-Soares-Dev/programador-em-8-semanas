const leadForm = document.getElementById("leadForm")
const popup = document.getElementById("popup")
const closePopup = document.getElementById("closePopup")

leadForm.addEventListener("submit", (ev) => {
    ev.preventDefault()

    const leadName = document.getElementById("leadName").value
    const leadEmail = document.getElementById("leadEmail").value
    const leadWhatsapp = document.getElementById("leadWhatsapp").value

    
    document.getElementById("popupName").innerText = leadName
    document.getElementById("popupEmail").innerText = leadEmail
    document.getElementById("popupWhatsapp").innerText = leadWhatsapp

    // Exibir o popup
    popup.style.display = "flex"
})


closePopup.addEventListener("click", () => {
    popup.style.display = "none"
})


window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none"
    }
})
