function toggleSenha(inputId, iconId) {
    const senhaInput = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
  
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash'); // Troca o ícone para "ocultar"
    } else {
      senhaInput.type = "password";
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye'); // Troca o ícone para "mostrar"
    }
}
