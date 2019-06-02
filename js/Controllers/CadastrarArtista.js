$(function () {
    var database = firebase.database();
    $("#cadastroArtista").click(function (e) {
        
        e.preventDefault();
        var artista = { 
            nome: $("#nome").val(),
            email: $("#email").val(),
            senha: $("#senha").val(),
            generos: $("#generos").val(),
        }
        
        if(validarArtista(artista)){
          // Get a reference to the database servic 
          console.log("criou a var database")
          writeUserData();

        }

        function writeUserData() {
            console.log("Entrou no writeUserData")
            let UID = firebase.database().ref('artistas').push().key; //Id unico
            firebase.database().ref('artistas').child(UID).set(artista)
            //firebase.database().ref('artistas/').set({
            //artista
          //});
        }        
    });
});

