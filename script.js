let perguntas = [
    {
    titulo: 'Gato',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correta: 1,
    },

    {
    titulo: 'Fire',
    alternativas: ['Fogo', 'Água', 'Terra', 'Ar'],
    correta: 0,
    },

    {
    titulo: 'Bird',
    alternativas: ['Gato', 'Urubu', 'Pombo', 'Pássaro'],
    correta: 3,
    }
]

let app = {
    start: function(){
        this.atualPos = 0; //posição das perguntas
        this.totalPontos = 0;

        let alts = document.querySelectorAll('.alternativas');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        });
        this.atualizaPontos();
        app.mostraQuestao(perguntas[this.atualPos]);
    },

    mostraQuestao: function(q){
        this.qatual = q;

        //mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        
        //mostrando as alternativas
        let alts = document.querySelectorAll('.alternativas');
        alts.forEach((element, index)=>{
            element.textContent = q.alternativas[index];
            
        });
    },

    proximaPerg: function(){
        this.atualPos++;
        if(this.atualPos == perguntas.length){
            this.atualPos = 0;
        }
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta!");
            this.totalPontos++;
            this.mostraResposta(true);
        }
        else{
            console.log("Errada!");
            this.mostraResposta(false);
        }

        this.atualizaPontos();
        this.proximaPerg();
        this.mostraQuestao(perguntas[this.atualPos]);
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação é: ${this.totalPontos}`;
    },

    mostraResposta: function(correto){
        let resultDiv = document.getElementById('result');
        let result = '';

        //formatar como a mensagem será lida
        if(correto){
            result = 'Resposta correta!';
        }
        else{
            //obtendo a questão atual
            let pergunta = perguntas[this.atualPos];

            //obtenha o indice da resposta correta da questao atual
            let cindice = pergunta.correta;

            //obtenha o texto da resposta atual
            let ctexto = pergunta.alternativas[cindice];
            result  = `Incorreto! Resposta correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    }
}

app.start();