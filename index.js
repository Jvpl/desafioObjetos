const obj = {
    mensagem: 'ss;saa;s;RdsSs',
};

const codigo = obj.mensagem;

function decodificador(codigo){
   
    if(codigo.length < 250){
        const separadores = /[^a-z]/;
        const result = codigo.split(separadores);
        const palavrasFiltradas = result.filter(function(palavra){
            return palavra !== '';
        });
        return palavrasFiltradas.length;
    
}
}



console.log(decodificador(codigo));

