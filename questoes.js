const questionsData = [
    // -------------------------------Revolta Sabinada-----------------------
    // questao 1
    {
        pergunta : "A alternativa que compõe o que está por trás do nome da revolta popular brasileira \"Sabinada\" é:",
        respostas : 
            [
              {
                status: true,
                txt: "É uma homenagem ao líder Francisco Sabino Barroso."
            }  ,
            {
                status: false,
                txt: "O nome serve para lembrar da época em que não sabiam nada."
            },{
                status: false,
                txt: "O nome foi dado em homenagem a Eduardo Sabino de Almeida."
            },
            {
                status: false,
                txt: "A revolta possui este nome por se tratar de uma revolta separatista."
            }
            ]
    },
    //questao 2
    {
        pergunta : "A alternativa que retrata o contexto histórico em que se desenvolveu a revolta Sabinada é:",
        respostas : 
            [
              {
                status: true,
                txt: "O Período Regencial foi marcado por intensas disputas e confrontos nas províncias e na Bahia. Os sabinos pretendiam implantar uma república na região."
            }  ,
            {
                status: false,
                txt: "A Sabinada ocorreu no período da proclamação da república, em 1889, e os ideais positivistas do exército influenciaram os revoltosos"
            },{
                status: false,
                txt: "Francisco Sabino convocou seus aliados a lutarem contra o domínio português, que insistia em explorar a região açucareira na Bahia."
            },
            {
                status: false,
                txt: "A Sabinada foi uma revolta do período republicano brasileiro e tinha como objetivo a abolição da escravidão, se trata de uma revolta separatista."
            }
            ]
    },
    //questão 3
    {
        pergunta : "Como as autoridades brasileiras lidaram na época com os rebeldes durante a revolta Sabinada?",
        respostas : 
            [
              {
                status: true,
                txt: "Utilizaram repressão militar."
            }  ,
            {
                status: false,
                txt: "Negociaram uma rendição pacífica."
            },{
                status: false,
                txt: "Concederam anistia aos rebeldes"
            },
            {
                status: false,
                txt: "Ignoraram os conflitos."
            }
            ]
    },
    // questão 4
    {
        pergunta : "Qual era o objetivo dos rebeldes durante a Sabinada?",
        respostas : 
            [
              {
                status: true,
                txt: "Estabelecer uma república independente na Bahia"
            }  ,
            {
                status: false,
                txt: "Lutar pela abolição da escravidão"
            },{
                status: false,
                txt: "Defender os interesses da coroa portuguesa"
            },
            {
                status: false,
                txt: "Expandir o território brasileiro para o sul"
            }
            ]
    },
    // ------------------------------------- Revolta Balaiada ------------------
    // questão 1
    {
        pergunta : "Qual foi a principal característica dos participantes da Balaiada?",
        respostas : 
            [
              {
                status: true,
                txt: "Camadas mais pobres e marginalizadas da sociedade"
            }  ,
            {
                status: false,
                txt: "Elite econômica e política"
            },{
                status: false,
                txt: "Classe média urbana"
            },
            {
                status: false,
                txt: "Militares insatisfeitos com o governo"
            }
            ]
    },
    // questão 2    
    {
        pergunta : "Qual dos seguintes motivos não foi uma causa da Balaiada, uma revolta popular que ocorreu no Maranhão entre 1838 e 1841?",
        respostas : 
            [
              {
                status: true,
                txt: "Condições de trabalho precárias dos escravos."
            }  ,
            {
                status: false,
                txt: "Descontentamento com a política centralizadora do Império."
            },{
                status: false,
                txt: "Aumento dos impostos sobre a produção de algodão."
            },
            {
                status: false,
                txt: "Disputas políticas entre os partidos conservadores e liberais."
            }
            ]
    },
    //questão 3
    {
        pergunta : "O local onde ocorreu a Balaiada foi:",
        respostas : 
            [
              {
                status: true,
                txt: " Na província do Maranhão."
            }  ,
            {
                status: false,
                txt: "Em Salvador, na Bahia"
            },{
                status: false,
                txt: "Na província do Grão-Pará."
            },
            {
                status: false,
                txt: " Na capital do Rio de Janeiro."
            }
            ]
    },
    //questão 4
    {
        pergunta : "Qual líder rebelde se destacou durante a Balaiada, liderando uma facção conhecida como \"Batalhão dos Periquitos\"?",
        respostas : 
            [
              {
                status: true,
                txt: "Manuel Francisco dos Anjos Ferreira."
            }  ,
            {
                status: false,
                txt: "Raimundo Gomes."
            },{
                status: false,
                txt: "Cosme Bento das Chagas"
            },
            {
                status: false,
                txt: "Vicente Ferreira."
            }
            ]
    },
    //------------------------------------ Revolta Cabanagem --------------------------------
    // questão 1
    {
        pergunta : "Em qual região do Brasil a Cabanagem teve maior impacto?",
        respostas : 
            [
              {
                status: true,
                txt: "Norte"
            }  ,
            {
                status: false,
                txt: "Sul"
            },{
                status: false,
                txt: "Nordeste"
            },
            {
                status: false,
                txt: "Centro-Oeste"
            }
            ]
    },
    //questão 2
    {
        pergunta : "Qual foi o principal motivo que desencadeou a Cabanagem?",
        respostas : 
            [
              {
                status: true,
                txt: "Insatisfação com a centralização política e econômica imposta pelo governo central."
            }  ,
            {
                status: false,
                txt: "Disputas territoriais entre as províncias."
            },{
                status: false,
                txt: "Conflitos religiosos entre diferentes grupos étnicos"
            },
            {
                status: false,
                txt: "Revolta contra a abolição da escravatura."
            }
            ]
    },
    // questão 3
    {
        pergunta : "Quem liderou a revolta da Cabanagem?",
        respostas : 
            [
              {
                status: true,
                txt: "Félix Malcher"
            }  ,
            {
                status: false,
                txt: "Tiradentes"
            },{
                status: false,
                txt: "Dom Pedro II"
            },
            {
                status: false,
                txt: "Zumbi dos Palmares"
            }
            ]
    },
    // questão 4
    {
        pergunta : "Onde teve início o movimento da Cabanagem?",
        respostas : 
            [
              {
                status: true,
                txt: "Grão-Pará"
            }  ,
            {
                status: false,
                txt: "Rio de Janeiro"
            },{
                status: false,
                txt: "Recife"
            },
            {
                status: false,
                txt: "Salvador"
            }
            ]
    },
]