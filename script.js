function toggleCurso(cursoId) {
    const checkbox = document.getElementById(cursoId);
    const nextCursoRow = document.getElementById(cursoId + "_row");

    if (checkbox.checked) {
        nextCursoRow.classList.remove('disabled');
        nextCursoRow.classList.add('enabled');
        nextCursoRow.querySelector('input').disabled = false;
    } else {
        nextCursoRow.classList.remove('enabled');
        nextCursoRow.classList.add('disabled');
        nextCursoRow.querySelector('input').disabled = true;
    }
}
