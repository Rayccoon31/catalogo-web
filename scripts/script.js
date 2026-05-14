function copiarNumero(btn, numero) {
    navigator.clipboard.writeText(numero).then(() => {
        const textoOriginal = btn.innerHTML;
        btn.innerHTML = '<span class="text-xs">¡Copiado!</span>';
        btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        btn.classList.add('bg-green-500', 'hover:bg-green-600');
        
        setTimeout(() => {
            btn.innerHTML = textoOriginal;
            btn.classList.remove('bg-green-500', 'hover:bg-green-600');
            btn.classList.add('bg-blue-500', 'hover:bg-blue-600');
        }, 2000);
    });
}

function abrirModal() {
    const modal = document.getElementById('modalHorarios');
    modal.style.display = 'flex';
}

function cerrarModal() {
    const modal = document.getElementById('modalHorarios');
    modal.style.display = 'none';
}

document.getElementById('modalHorarios').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});
