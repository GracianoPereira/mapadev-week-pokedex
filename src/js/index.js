/*
quanado clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokemon

precisamos criar duas variaveis js para trabalhar com os elementos da tela


vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem pokemon


- remover a classe aberto só do cartão queesta aberto (no caso o pikachu)

- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar

-romover a classe ativo que marca o pokemon selecionado

-adicionar a classe ativo no item da lista selecionado.


*/




//pra isso vamos precisar trabalhar com dois elementos//

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon =>{
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem pokemon//

    pokemon.addEventListener('click', () => {
        //- remover a classe aberto só do cartão queesta aberto (no caso o pikachu)

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar


        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //-romover a classe ativo que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-adicionar a classe ativo no item da lista selecionado.
        
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})