function validationForm (event) {
    let identifiant = document.getElementById('identifiant').value
    let motdePasse = document.getElementById('identifiant').value

    if (identifiant.trim() === '' || motdePasse.trim() === ''   ){
       event.preventDefault();
        alert('Veuillez remplir les champs')
    }

}

document.getElementById('connexionForm').addEventListener('submit', validationForm);


