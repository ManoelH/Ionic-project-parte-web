$(function () {
    var database = firebase.database();
    $("#cadastroArtista").click(function (e) {
        
        e.preventDefault();
        var artista = { 
            nome: $("#nome").val(),
            email: $("#email").val(),
            senha: $("#senha").val(),
            generos: $("#generos").val(),
            foto: $("#foto").val(),
        }
        
        if(validarArtistaCadastro(artista)){
          // Get a reference to the database servic 
          writeUserData();
        }

        function writeUserData() {
            let UID = firebase.database().ref('artistas').push().key; //Id unico
            firebase.database().ref('artistas').child(UID).set(artista).then(sucesso =>{
                
                firebase.auth().createUserWithEmailAndPassword(artista.email, artista.senha).then(sucesso => {
                    window.location.href = '../index.html';
                  }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    //console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
                  });
            })
        }
                
    });
});

