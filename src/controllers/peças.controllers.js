const db = require('./../../infra/db.js')

const peçasControllers = {
    mostrarPeças: async function() {
        return await db;
    },
    
    encontrarPorNome: async function(rnome) {
        const peçaRetorno = [];
        await db.forEach(peça => {
            if(peça.nome === rnome){
                peçaRetorno.push(peça)
            }   
        })
        return peçaRetorno;
    },

    encontrarPorCategoria: async function(rcategoria){
        const peçasRetorno = [];
        await db.forEach(peça => {
            if(peça.categoria === rcategoria){
                peçasRetorno.push(peça)
            }   
        })
        return peçasRetorno;
    },

    cadastrar: async function(rpeça){
        await db.push(rpeça)
    },

    atualizar: async function(rnome, rmudanca){
        const atributosQueIrãoMudar = Object.keys(rmudanca); // pega os atributos que irã ser atualizado
        
        db.forEach( peça => {
            if(peça.nome === rnome){ // filtra pelo nome da peça e quando achar inicia a mudança
                atributosQueIrãoMudar.forEach( atributo => { 
                    peça[atributo] = rmudanca[atributo] // procura na peça atributos que irão ser mudadeo 
                })   
            }        
        })  
    },

    delete: async function(){
        // db.splice(1,1);
        console.log(index)
    }
}

module.exports = peçasControllers;