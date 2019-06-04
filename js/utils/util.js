function validarArtistaCadastro(artista) {
    var validado = true;

    if (!artista.nome) {
        validado = false;
        //$("#nomeObr").show();
        //$("#nome").addClass("is-invalid");
    }

    if (!artista.email) {
        validado = false;
        //$("#emailObr").show();
        //$("#email").addClass("is-invalid");
    }

    if (!artista.senha || artista.senha.length < 6) {
        validado = false;
        //$("#senhaObr").show();
        //$("#senha").addClass("is-invalid");
    }

    if (!artista.generos) {
        validado = false;
        //$("#cargoObr").show();
        //$("#cargo").addClass("is-invalid");
    }

    if (!artista.foto) {
        validado = false;
        //$("#nomeObr").show();
        //$("#nome").addClass("is-invalid");
    }

    return validado;
}

function validarArtistaLogin(artista) {
    var validado = true;

    if (!artista.email) {
        validado = false;
        //$("#emailObr").show();
        //$("#email").addClass("is-invalid");
    }

    if (!artista.senha || artista.senha.length < 6) {
        validado = false;
        //$("#senhaObr").show();
        //$("#senha").addClass("is-invalid");
    }

    return validado;
}