// Array de imagens e opções de respostas
const gameData = [
    {
        imageSrc: 'images/1_2001.png',
        options: ['Scarface', '2001: Uma Odisséia no Espaço', 'Interstelar', 'Wall-e'],
        correctAnswerIndex: 1
    },
    {
        imageSrc: 'images/2_Amelie.png',
        options: ['História Sem Fim', 'Harry e Sally', 'O fabuloso destino de amélie poulain', 'O Poderoso Chefão'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/3_ClubedaLuta.png',
        options: ['Barbie', 'Trainspotting', 'O Cubo', 'Clube da Luta'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/4_IndianaJones.png',
        options: ['Oppenheimer', 'Indiana Jones', 'Missão Impossível', 'O Patriota'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: 'images/5_Perfume.png',
        options: ['Sangue Negro', 'Sangue e Ouro', 'Vidro', 'Perfume'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/6_DeVoltaParaoFuturo.png',
        options: ['De Volta Para o Futuro', 'Exterminador do Futuro', 'Space Jam', 'Corra'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: 'images/7_Seven.png',
        options: ['Oráculo', 'Seven', 'Bird Box', 'O Cubo'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: 'images/8_Up.png',
        options: ['Up', 'Um dia de Fúria', 'Kinsgman', 'Superman'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: 'images/9_Interestelar.png',
        options: ['Gravidade', 'A Chegada', 'Interestelar', '2001: Uma Odisséia no Espaço'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/10_Kill_Bill.png',
        options: ['Jogo da Morte', 'Amarelo Manga', 'Bill e Ted: Dois Loucos no Tempo', 'Kill Bill'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/11_Inception.png',
        options: ['A Ilha do Medo', 'O Regresso', 'Inception', 'Django Livre'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/12_CidadedeDeus.png',
        options: ['Abril Despedaçado', 'Dois Coelhos', 'O homem que copiava', 'Cidade de Deus'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/13_SilenciodosInocentes.png',
        options: ['Zodíaco', 'Silêncio dos Inocentes', 'A Mosca', 'Hannibal'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: 'images/14_Fragmentado.png',
        options: ['Vidro', 'Corpo Fechado', 'Fragmentado', 'A Casa de Vidro'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/15_PulpFiction.png',
        options: ['Pulp Fiction', 'It', 'Amores Brutos', 'Cães de Aluguel'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: 'images/16_BebedeRosemary.png',
        options: ['Bebe de Rosemary', 'Três Solteirões e um Bebê', 'Querida, Estiquei o Bebê', 'A Família Addams'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: 'images/17_CantandonaChuva.png',
        options: ['Resident Evil', 'Cantando na Chuva', 'A Frente Fria que a Chuva Traz', 'A Chuva'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: 'images/18_LaranjaMecanica.png',
        options: ['Kids', 'Trainspotting', 'Laranja Mecância', 'O Iluminado'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/19_AViagemdeChihiro.png',
        options: ['O Castelo Animado', 'Ponyo', 'Meu Amigo Totoro', 'A Viagem de Chihiro'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/20_StarWars.png',
        options: ['Oblivion', 'Star Wars', 'Star Trek', 'Tropas Estelares'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: 'images/21_OLabirintodoFauno.png',
        options: ['Harry Potter', 'O Senhor dos Anéis', 'O Labirinto do Fauno', 'Hell Boy'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: 'images/22_MadMax.png',
        options: ['Mad Max', 'Velozes e Furiosos', 'Carros', 'Death Proof'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: 'images/23_OPoderosoChefao.png',
        options: ['Scarface', 'Bons Companheiros', 'O Infiltrado', 'O Poderoso Chefão'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: 'images/24_Matrix.png',
        options: ['Jonh Wick', 'Matrix', 'Réquiem Para Um Sonho', 'Bicho de Sete Cabeças'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '25_UmdiadeFuria.png',
        options: ['Um dia de Fúria', 'Dia de Treinamento', 'Um dia de Cão ', 'O Dia Depois de Amanhã'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '26_JogosVorazes_1.png',
        options: ['Jogos Mortais', 'Jogos Vorazes', 'A Fantástica Fábrica de Chocolate', 'Sexta-Feira 13'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '28_LittleMissSunshine.png',
        options: ['Yesterday', 'Capitão Fantástico', 'Little Miss Sunshine', 'Blue Jasmine'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '29_SenhordosAneis.png',
        options: ['Hobbit', 'O Senhor dos Anéis', 'As Crônicas de Nárnia', 'A Lenda de Beowulf'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '30_It.png',
        options: ['Halloween', 'A Hora do Pesadelo', 'It: A Coisa', 'Colheita Maldita'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: '31_BelezaAmericana.png',
        options: ['Beleza Americana', 'Psicopata Americano', 'Snatch - Porcos e Diamantes', 'O Caçador de Pipas'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '32_Drive.png',
        options: ['O abutre', 'O Corvo', 'Drive', 'Era Uma vez em Hollywood'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '33_HarryPotter.png',
        options: ['Percy Jackson e o Ladrão de Raios', 'A Bússola de Ouro', 'Harry Potter', 'Malévola'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '34_TaxiDriver.png',
        options: ['Infiltrados', 'Fargo', 'Um Estranho no Ninho', 'Taxi Driver'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: '35_Titanic.png',
        options: ['Titanic', 'Romeu e Julieta', 'Avatar', 'Razão e Sensibilidade'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '36_Corra.png',
        options: ['Nós', 'Não! Não Olhe!', 'Corra', 'Hereditário'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '37_MeuPrimeiroAmor.png',
        options: ['Bee Movie', 'Meu Primeiro Amor', 'Gatinhas & Gatões', 'Extraordinário'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '38_Robocop.png',
        options: ['Exterminador do Futuro', 'Eu, Robô', 'Robocop', 'O Vingador do Futuro'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '39_Barbie.png',
        options: ['Barbie', 'Tinker Bell', 'As Patricinhas de Beverly Hills', 'Lady Bird'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '40_ForrestGump.png',
        options: ['Rain Main', 'O Terminal', 'Big Fish', 'Forrest Gump'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: '41_Matrix_1.png',
        options: ['Inception', 'Matrix', 'A Rede Social', 'Elysium'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '42_MonstrosSA.png',
        options: ['Monstros S.A.', 'O Olho que Tudo Vê', 'De Olhos Bem Fechados', 'Não Olhe para Cima'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '43_Alien.png',
        options: ['Predador', 'E.T.: O Extraterrestre', 'Contatos Imediatos', 'Alien'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: '44_AssassinosPorNatureza.png',
        options: ['O Iluminado', 'Her', 'Assassinos por Natureza', 'Um Drink no Inferno'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '45_Coringa.png',
        options: ['Esquadrão Suicida', 'Coringa', 'A Fantástica Fábrica de Chocolate', 'O Palhaço'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '46_Trainspotting.png',
        options: ['Trainspotting', 'Diário de um Adolescente', 'Réquiem Para um Sonho', 'Eu, Cristiane F.'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '47_Rocky.png',
        options: ['Creed', 'Touro Indomável', 'Rocky', 'Ali'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '48_Psicose.png',
        options: ['Pássaros', 'O Exorcista', 'Psicose', 'O Chamado'],
        correctAnswerIndex: 3
    },
	{
        imageSrc: '49_Tubarao.png',
        options: ['Mar Adentro', 'Mar em Fúria', 'Tubarão', 'Mares Sangrentos'],
        correctAnswerIndex: 2
    },
	{
        imageSrc: '50_aVidaAquaticadeSteveZissou.png',
        options: ['A Vida Marinha com Steve Zissou', '(500) Dias com Ela', 'Lost in Translation', 'Os Excêntricos Tenenbaums'],
        correctAnswerIndex: 0
    },
	{
        imageSrc: '51_OndeosFracosNaoTemVez.png',
        options: ['O Grande Lebowski', 'Onde os Fracos Não Têm Vez', 'Queime Depois de Ler', 'Bravura Indômita'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '53_JogosVorazes_2.png',
        options: ['As Crônicas de Nárnia', 'Jogos Vorazes', 'Perfume de Mulher', 'Uma linda Mulher'],
        correctAnswerIndex: 1
    },
	{
        imageSrc: '54_Robocop2.png',
        options: ['007', 'Missão Impossível', 'Robocop', 'Em nome da Rosa'],
        correctAnswerIndex: 1
    },
	
    // Adicione mais entradas para mais imagens e perguntas
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const question = gameData[index];
    document.getElementById('movie-image').src = question.imageSrc;

    const options = question.options;
    for (let i = 0; i < 4; i++) {
        const button = document.getElementsByClassName('option-button')[i];
        button.textContent = options[i];
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = gameData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        alert('Resposta correta! Avançando para a próxima pergunta.');
        currentQuestionIndex++;
        if (currentQuestionIndex < gameData.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Parabéns, você concluiu o jogo!');
            currentQuestionIndex = 0;
            loadQuestion(currentQuestionIndex);
        }
    } else {
        alert('Resposta incorreta. O jogo será reiniciado.');
        currentQuestionIndex = 0;
        loadQuestion(currentQuestionIndex);
    }
}

// Carregue a primeira pergunta quando a página for carregada
loadQuestion(currentQuestionIndex);
