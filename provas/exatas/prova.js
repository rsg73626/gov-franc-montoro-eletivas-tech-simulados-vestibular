

const exatas = {
    area: "Matemática e suas Tecnologias",
    questoes: [
        {
            id: "questao_1",
            enunciados: [
                { 
                    tipo: "texto",
                    conteudo: "(Enem 2020). A Pesquisa Nacional por Amostra de Domicílios (Pnad) é uma pesquisa feita anualmente pelo IBGE, exceto nos anos em que há Censo. Em um ano, foram entrevistados 363 mil jovens para fazer um levantamento sobre suas atividades profissionais e/ou acadêmicas. Os resultados da pesquisa estão indicados no gráfico."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_1.jpg",
                    texto_alternativo: "Porcentagem de jovens em atividade entre 15 e 29 anos. Gráfico de barras. Tipo de atividade no eixo horizontal. Porcentagem no eixo vertical."
                },
                {
                    tipo: "texto",
                    conteudo: "De acordo com as informações dadas, o número de jovens entrevistados que trabalha é: "
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 114.708" },
                { id: "b", tipo: "texto", conteudo: "b) 164.076" },
                { id: "c", tipo: "texto", conteudo: "c) 213.444" },
                { id: "d", tipo: "texto", conteudo: "d) 284.592" },
                { id: "e", tipo: "texto", conteudo: "e) 291.582" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_2",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem 2020). Para chegar à universidade, um estudante utiliza um metrô e, depois, tem duas opções: seguir num ônibus, percorrendo 2,0 km; alugar uma bicicleta, ao lado da estação do metrô, seguindo 3,0 km pela ciclovia. O quadro fornece as velocidades médias do ônibus e da bicicleta, em km/h, no trajeto metrô-universidade."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_2.jpg",
                    texto_alternativo: "Tabela com a velocidade média em km por hora de ônibus e bicicleta ao longo de uma semana."
                },
                {
                    tipo: "texto",
                    conteudo: "A fim de poupar tempo no deslocamento para a universidade, em quais dias o aluno deve seguir pela ciclovia?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) Às segundas, quintas e sextas-feiras." },
                { id: "b", tipo: "texto", conteudo: "b) Às terças e quintas-feiras e aos sábados." },
                { id: "c", tipo: "texto", conteudo: "c) Às segundas, quartas e sextas-feiras." },
                { id: "d", tipo: "texto", conteudo: "d) Às terças, quartas e sextas-feiras." },
                { id: "e", tipo: "texto", conteudo: "e) Às terças e quartas-feiras e aos sábados." },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_3",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "A caixa-d'água de um edifício terá a forma de um paralelepípedo retângulo reto com volume igual a 28 080 litros. Em uma maquete que representa o edifício, a caixa-d'água tem dimensões 2 cm x 3,51 cm x 4 cm. Dado: 1 dm³ = 1 L. A escala usada pelo arquiteto foi"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 1 : 10" },
                { id: "b", tipo: "texto", conteudo: "b) 1 : 100" },
                { id: "c", tipo: "texto", conteudo: "c) 1 : 1 000" },
                { id: "d", tipo: "texto", conteudo: "d) 1 : 10 000" },
                { id: "e", tipo: "texto", conteudo: "e) 1 : 100 000" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_4",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem 2020). Nos livros Harry Potter, um anagrama do nome do personagem “TOM MARVOLO RIDDLE”  gerou a frase “I AM LORD VOLDEMORT”. Suponha que Harry quisesse formar todos os anagramas da frase “I AM POTTER”, de tal forma que as vogais e consoantes aparecessem sempre intercaladas, e sem considerar o espaçamento entre as letras. Nessas condições, o número de anagramas formados é dado por"
                },
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 9!" },
                { id: "b", tipo: "texto", conteudo: "b) 4! 5!" },
                { id: "c", tipo: "texto", conteudo: "c) 2 x 4! 5!" },
                { id: "d", tipo: "texto", conteudo: "d) 9! / 2" },
                { id: "e", tipo: "texto", conteudo: "e) 4! 5! / 2" },
            ],
            alternativa_correta: "e"
        },
        {
            id: "questao_5",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem 2020). A exposição a barulhos excessivos, como os que percebemos em geral em trânsitos intensos, casas noturnas e espetáculos musicais, podem provocar insônia, estresse, infarto, perda de audição, entre outras enfermidades. De acordo com a Organização Mundial da Saúde, todo e qualquer som que ultrapasse os 55 decibéis (unidade de intensidade do som) já pode ser considerado nocivo para a saúde. O gráfico foi elaborado a partir da medição do ruído produzido, durante um dia, em um canteiro de obras."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_5.jpg",
                    texto_alternativo: "Gráfico: decibéis por hora."
                },
                {
                    tipo: "texto",
                    conteudo: "Nesse dia, durante quantas horas o ruído esteve acima de 55 decibéis?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 5" },
                { id: "b", tipo: "texto", conteudo: "b) 8" },
                { id: "c", tipo: "texto", conteudo: "c) 10" },
                { id: "d", tipo: "texto", conteudo: "d) 11" },
                { id: "e", tipo: "texto", conteudo: "e) 13" },
            ],
            alternativa_correta: "e"
        },
        {
            id: "questao_6",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem 2020). Os gráficos representam a produção de peças em uma indústria e as horas trabalhadas dos funcionários no período de cinco dias. Em cada dia, o gerente de produção aplica uma metodologia diferente de trabalho. Seu objetivo é avaliar a metodologia mais eficiente para utilizá-la como modelo nos próximos períodos."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_6.jpg",
                    texto_alternativo: "Gráfico superior: peças produzidas. Gráfico inferior: horas trabalhadas."
                },
                {
                    tipo: "texto",
                    conteudo: "Sabe-se que, neste caso, quanto maior for a razão entre o número de peças produzidas e o número de horas trabalhadas, maior será a eficiência da metodologia. Em qual dia foi aplicada a metodologia mais eficiente?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 1" },
                { id: "b", tipo: "texto", conteudo: "b) 2" },
                { id: "c", tipo: "texto", conteudo: "c) 3" },
                { id: "d", tipo: "texto", conteudo: "d) 4" },
                { id: "e", tipo: "texto", conteudo: "e) 5" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_7",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem/2018) Uma empresa de comunicação tem a tarefa de elaborar um material publicitário de um estaleiro para divulgar um novo navio, equipado com um guindaste de 15 m de altura e uma esteira de 90 m de comprimento. No desenho desse navio, a representação do guindaste deve ter sua altura entre 0,5 cm e 1 cm, enquanto a esteira deve apresentar comprimento superior a 4 cm. Todo o desenho deverá ser feito em uma escala 1 : X. Os valores possíveis para X são, apenas,"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) X > 1 500" },
                { id: "b", tipo: "texto", conteudo: "b) X < 3 000" },
                { id: "c", tipo: "texto", conteudo: "c) 1 500 < X < 2 250" },
                { id: "d", tipo: "texto", conteudo: "d) 1 500 < X < 3 000" },
                { id: "e", tipo: "texto", conteudo: "e) 2 250 < X < 3 000" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_8",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem/2018) Com o avanço em ciência da computação, estamos próximos do momento em que o número de transistores no processador de um computador pessoal será da mesma ordem de grandeza que o número de neurônios em um cérebro humano, que é da ordem de 100 bilhões. Uma das grandezas determinantes para o desempenho de um processador é a densidade de transistores, que é o número de transistores por centímetro quadrado. Em 1986, uma empresa fabricava um processador contendo 100 000 transistores distribuídos em 0,25 cm² de área. Desde então, o número de transistores por centímetro quadrado que se pode colocar em um processador dobra a cada dois anos (Lei de Moore). Considere 0,30 como aproximação para log com 10 subscrito 2 Em que ano a empresa atingiu ou atingirá a densidade de 100 bilhões de transistores?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 1999" },
                { id: "b", tipo: "texto", conteudo: "b) 2002" },
                { id: "c", tipo: "texto", conteudo: "c) 2022" },
                { id: "d", tipo: "texto", conteudo: "d) 2026" },
                { id: "e", tipo: "texto", conteudo: "e) 2146" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_9",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem/2017) Uma empresa especializada em conservação de piscinas utiliza um produto para tratamento da água cujas especificações técnicas sugerem que seja adicionado 1,5 mL desse produto para cada 1 000 L de água da piscina. Essa empresa foi contratada para cuidar de uma piscina de base retangular, de profundidade constante igual a 1,7 m, com largura e comprimento iguais a 3 m e 5 m, respectivamente. O nível da lâmina d’água dessa piscina é mantido a 50 cm da borda da piscina. A quantidade desse produto, em mililitro, que deve ser adicionada a essa piscina de modo a atender às suas especificações técnicas é"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 11,25" },
                { id: "b", tipo: "texto", conteudo: "b) 27,00" },
                { id: "c", tipo: "texto", conteudo: "c) 28,80" },
                { id: "d", tipo: "texto", conteudo: "d) 32,25" },
                { id: "e", tipo: "texto", conteudo: "e) 49,50" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_10",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(Enem/2016) Sob a orientação de um mestre de obras, João e Pedro trabalharam na reforma de um edifício. João efetuou reparos na parte hidráulica nos andares 1, 3, 5, 7, e assim sucessivamente, de dois em dois andares. Pedro trabalhou na parte elétrica nos andares 1, 4, 7, 10, e assim sucessivamente, de três em três andares. Coincidentemente, terminaram seus trabalhos no último andar. Na conclusão da reforma, o mestre de obras informou, em seu relatório, o número de andares do edifício. Sabe-se que, ao longo da execução da obra, em exatamente 20 andares, foram realizados reparos nas partes hidráulica e elétrica por João e Pedro. Qual é o número de andares desse edifício?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 40" },
                { id: "b", tipo: "texto", conteudo: "b) 60" },
                { id: "c", tipo: "texto", conteudo: "c) 100" },
                { id: "d", tipo: "texto", conteudo: "d) 115" },
                { id: "e", tipo: "texto", conteudo: "e) 120" },
            ],
            alternativa_correta: "d"
        },
        {
            id: "questao_11",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Em uma classe da 1ª série do Curso de Formação de Sargentos - EEAR, as idades dos alunos se distribuíam conforme a tabela."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_11.png",
                    texto_alternativo: "Tabela: Idade (anos); f de r (porcentagem)."
                },
                {
                    tipo: "texto",
                    conteudo: "Desta forma, a idade média ponderada desses alunos era de _______ anos."
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 18,81" },
                { id: "b", tipo: "texto", conteudo: "b) 18,98" },
                { id: "c", tipo: "texto", conteudo: "c) 19,06" },
                { id: "d", tipo: "texto", conteudo: "d) 16,23" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_12",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Um cilindro circular reto de 5 cm de raio da base e de 10 cm de altura terá toda a sua superfície lateral revestida por uma  fita de 0,5 cm de largura, como mostra a figura."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_12.png",
                    texto_alternativo: "Cilindro (ilustração de acordo com enunciado)."
                },
                {
                    tipo: "texto",
                    conteudo: "Considerando π = 3,14 e que não haverá sobreposição de fita, será necessário uma quantidade mínima de ______ m de fita para realizar a tarefa."
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 4,76" },
                { id: "b", tipo: "texto", conteudo: "b) 6,28" },
                { id: "c", tipo: "texto", conteudo: "c) 8,44" },
                { id: "d", tipo: "texto", conteudo: "d) 9,32" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_13",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Em um país europeu, o risco de uma criança desenvolver câncer é de 4 em 2.000. Se existem 15 milhões de crianças no país, quantas dessas desenvolverão câncer?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 30.000" },
                { id: "b", tipo: "texto", conteudo: "b) 36.000" },
                { id: "c", tipo: "texto", conteudo: "c) 42.000" },
                { id: "d", tipo: "texto", conteudo: "d) 48.000" },
                { id: "e", tipo: "texto", conteudo: "e) 54.000" },
            ],
            alternativa_correta: "a"
        },
        {
            id: "questao_14",
            enunciados: [
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_14.png",
                    texto_alternativo: "Tributação da gasolina (gráfico)."
                },
                {
                    tipo: "texto",
                    conteudo: "De acordo com o gráfico acima, considerando o preço de R$ 7,00 pelo litro de gasolina, o valor pago em tributos pelo consumidor para cada litro de gasolina, em Reais, é:"
                },
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 3,479" },
                { id: "b", tipo: "texto", conteudo: "b) 2,849" },
                { id: "c", tipo: "texto", conteudo: "c) 4,151" },
                { id: "d", tipo: "texto", conteudo: "d) 0,882" },
                { id: "e", tipo: "texto", conteudo: "e) 1,967" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_15",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Um prisma reto de altura igual a 15 cm tem por base um hexágono regular. Se a área lateral desse prisma é 270 cm2, o perímetro de uma das bases é igual a"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 21 cm" },
                { id: "b", tipo: "texto", conteudo: "b) 15 cm" },
                { id: "c", tipo: "texto", conteudo: "c) 18 cm" },
                { id: "d", tipo: "texto", conteudo: "d) 12 cm" },
                { id: "e", tipo: "texto", conteudo: "e) 9 cm" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_16",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Observe as medidas indicadas em um mapa do Parque Ibirapuera, região plana da cidade de São Paulo."
                },
                {
                    tipo: "imagem",
                    caminho_da_imagem: "./provas/exatas/imagens/imagem_questao_16.png",
                    texto_alternativo: "Map do Parque Ibirapuera com indicação de medidas em área triangular."
                },
                {
                    tipo: "texto",
                    conteudo: "De acordo com o mapa, uma caminhada em linha reta do Museu Afro Brasil (P) até o Museu de Arte Moderna de São Paulo (Q) corresponde a"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 400 m" },
                { id: "b", tipo: "texto", conteudo: "b) 625 m" },
                { id: "c", tipo: "texto", conteudo: "c) 676 m" },
                { id: "d", tipo: "texto", conteudo: "d) 484 m" },
                { id: "e", tipo: "texto", conteudo: "e) 576 m" },
            ],
            alternativa_correta: ""
        },
        {
            id: "questao_17",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: " (MACK SP) Num clube, dentre os 500 inscritos no departamento de natação, 30 são unicamente nadadores, entretento 310 também jogam futebol e 250 também jogam tênis. Os inscritos em natação que também praticam futebol e tenis são em número de:"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 80" },
                { id: "b", tipo: "texto", conteudo: "b) 90" },
                { id: "c", tipo: "texto", conteudo: "c) 100" },
                { id: "d", tipo: "texto", conteudo: "d) 110" },
                { id: "e", tipo: "texto", conteudo: "e) 120" },
            ],
            alternativa_correta: "b"
        },
        {
            id: "questao_18",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(UNIFOR CE) Dois conjuntos A e B são tais que A tem 8 subconjuntos e o número de elementos de A x B é igual a 12. Nessas condições, qual dos seguintes conjuntos poderia ser B?"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) { 1, 2 }" },
                { id: "b", tipo: "texto", conteudo: "b) { 1, 2, 3 }" },
                { id: "c", tipo: "texto", conteudo: "c) { 1, 2, 3, 4 }" },
                { id: "d", tipo: "texto", conteudo: "d) { 1, 2, 3, 4, 5 }" },
                { id: "e", tipo: "texto", conteudo: "e) { 1, 2, 3, 4, 5, 6 }" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_19",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "(UNIUBE MG) Num grupo de 2000 adultos, apenas 20% são portadores do vírus da hepatite B. Os homens desse grupo são exatamente 30% do total e apenas 10% das mulheres apresentam o vírus. O número total de homens desse grupo que não apresenta o vírus é, exatamente,"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 140" },
                { id: "b", tipo: "texto", conteudo: "b) 260" },
                { id: "c", tipo: "texto", conteudo: "c) 340" },
                { id: "d", tipo: "texto", conteudo: "d) 400" },
                { id: "e", tipo: "texto", conteudo: "e) 600" },
            ],
            alternativa_correta: "c"
        },
        {
            id: "questao_20",
            enunciados: [
                {
                    tipo: "texto",
                    conteudo: "Em um cubo, a quantidade de conjuntos distintos formados por duas arestas paralelas é igual a:"
                }
            ],
            alternativas: [
                { id: "a", tipo: "texto", conteudo: "a) 6" },
                { id: "b", tipo: "texto", conteudo: "b) 8" },
                { id: "c", tipo: "texto", conteudo: "c) 12" },
                { id: "d", tipo: "texto", conteudo: "d) 18" },
            ],
            alternativa_correta: "d"
        },
    ]
}