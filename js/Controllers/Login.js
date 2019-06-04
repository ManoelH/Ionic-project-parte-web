$(function () {
    var database = firebase.database();
    
    $("#login").click(function (e) {
        e.preventDefault();
        usuarioArtista = {
            email: $('#email').val(),
            senha: $('#senha').val(),
        }

        if(validarArtistaLogin(usuarioArtista)){

            firebase.auth().signInWithEmailAndPassword(usuarioArtista.email, usuarioArtista.senha).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                //console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
              });
            //window.location.href = '../pages/principal.html'  
            console.log('USER AUTENTICATED')
        }
        
    });   

});

