
const form = document.getElementById("contactForm");
const status = document.getElementById("status");
const inputs = form.querySelectorAll("input, textarea");

// Carregar valores do localStorage ao abrir a página
window.addEventListener("load", () => {
    inputs.forEach(input => {
        const value = localStorage.getItem(input.id);
        if (value) input.value = value;
    });

    // Mostrar dados do sessionStorage desconvertidos
    const savedSession = sessionStorage.getItem("formData");
    if (savedSession) {
        const obj = JSON.parse(savedSession);
        console.log("Dados no sessionStorage (objeto JS):", obj);
    }
});

// Salvar no localStorage em tempo real
inputs.forEach(input => {
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    });
});

// Botão Enviar -> salva em sessionStorage como JSON
document.getElementById("enviar").addEventListener("click", () => {
    const data = {};
    inputs.forEach(input => data[input.id] = input.value);

    sessionStorage.setItem("formData", JSON.stringify(data));
    status.textContent = "Dados enviados e salvos em sessionStorage!";
});

// Detectar alterações no localStorage em tempo real (entre abas)
window.addEventListener("storage", (event) => {
    console.log("Mudança detectada em localStorage:", event.key, event.newValue);
});
