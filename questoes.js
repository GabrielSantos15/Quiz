const questionsData = [
    // -------------------------------Origem do nome Bluetooth-----------------------
    {
        pergunta: "A alternativa que explica a origem do nome da tecnologia 'Bluetooth' é:",
        respostas: [
            {
                status: true,
                txt: "É uma homenagem a um rei viking chamado Harald 'Bluetooth', conhecido por unir tribos, assim como a tecnologia conecta dispositivos."
            },
            {
                status: false,
                txt: "Foi uma criação aleatória de engenheiros da IBM para soar moderno."
            },
            {
                status: false,
                txt: "O nome vem da coloração azul usada em cabos de rede no início da tecnologia."
            },
            {
                status: false,
                txt: "É uma sigla técnica que significa 'Binary Link Over Universal Transmission'."
            }
        ]
    },
    // -------------------------------Origem do nome JavaScript-----------------------
    {
        pergunta: "Por que a linguagem JavaScript recebeu esse nome?",
        respostas: [
            {
                status: true,
                txt: "Foi uma estratégia de marketing para aproveitar a popularidade da linguagem Java na época."
            },
            {
                status: false,
                txt: "Porque ela foi criada por desenvolvedores da ilha de Java, na Indonésia."
            },
            {
                status: false,
                txt: "Por ser baseada diretamente na linguagem Java."
            },
            {
                status: false,
                txt: "Porque ela usa o mesmo compilador do Java."
            }
        ]
    },
    // -------------------------------Bug de software-----------------------
    {
        pergunta: "De onde surgiu o termo 'bug' para se referir a falhas em sistemas?",
        respostas: [
            {
                status: true,
                txt: "De um inseto real preso em um computador da década de 1940, registrado como a causa de uma falha."
            },
            {
                status: false,
                txt: "É uma sigla para 'Binary Underlying Glitch'."
            },
            {
                status: false,
                txt: "Vem da ideia de que bugs são como vírus que atacam softwares."
            },
            {
                status: false,
                txt: "Foi usado pela primeira vez por Bill Gates nos anos 90."
            }
        ]
    },
    // -------------------------------Apple e a maçã-----------------------
    {
        pergunta: "Por que a empresa Apple escolheu uma maçã como símbolo?",
        respostas: [
            {
                status: true,
                txt: "Em homenagem a Isaac Newton e à ideia de descoberta científica."
            },
            {
                status: false,
                txt: "Porque Steve Jobs era fã de torta de maçã."
            },
            {
                status: false,
                txt: "Porque maçã em inglês é fácil de lembrar."
            },
            {
                status: false,
                txt: "Por representar simplicidade e diversão, como um brinquedo infantil."
            }
        ]
    },
    // -------------------------------Primeiro vírus-----------------------
    {
        pergunta: "Qual foi o primeiro vírus de computador conhecido?",
        respostas: [
            {
                status: true,
                txt: "O 'Creeper', criado em 1971, que apenas exibia a mensagem 'I’m the creeper, catch me if you can!'."
            },
            {
                status: false,
                txt: "O 'ILOVEYOU', que se espalhava por e-mails com mensagens românticas."
            },
            {
                status: false,
                txt: "O 'Trojan Horse', que destruía arquivos do DOS."
            },
            {
                status: false,
                txt: "O 'Melissa', que desinstalava programas automaticamente."
            }
        ]
    },
    // -------------------------------Nome Linux-----------------------
    {
        pergunta: "O nome 'Linux' vem de:",
        respostas: [
            {
                status: true,
                txt: "Uma junção do nome do criador, Linus Torvalds, com 'Unix'."
            },
            {
                status: false,
                txt: "Uma sigla para 'Line Integrated User Network eXecution'."
            },
            {
                status: false,
                txt: "Um apelido de um antigo sistema da IBM."
            },
            {
                status: false,
                txt: "Nome de um mascote de pinguim criado em 1990 por um programador russo."
            }
        ]
    },
    // -------------------------------Nome Google-----------------------
    {
        pergunta: "A origem do nome 'Google' vem de:",
        respostas: [
            {
                status: true,
                txt: "Uma adaptação da palavra 'googol', que representa o número 1 seguido de 100 zeros."
            },
            {
                status: false,
                txt: "Um erro de digitação durante o registro do domínio, que era para ser 'Goggle'."
            },
            {
                status: false,
                txt: "Um termo criado por programadores indianos para representar algo rápido."
            },
            {
                status: false,
                txt: "Uma gíria antiga que significava 'pesquisar'."
            }
        ]
    },
    // -------------------------------Primeiro e-mail-----------------------
    {
        pergunta: "Quem enviou o primeiro e-mail da história?",
        respostas: [
            {
                status: true,
                txt: "Ray Tomlinson, em 1971, também foi o criador do uso do '@' nos e-mails."
            },
            {
                status: false,
                txt: "Tim Berners-Lee, criador da web, em 1989."
            },
            {
                status: false,
                txt: "Bill Gates, para divulgar o Windows 1.0 em 1985."
            },
            {
                status: false,
                txt: "Steve Jobs, quando fundou a Apple em 1976."
            }
        ]
    },
    // -------------------------------Origem do nome Wi-Fi-----------------------
    {
        pergunta: "O nome 'Wi-Fi' significa:",
        respostas: [
            {
                status: true,
                txt: "Nada específico, foi criado como uma marca parecida com 'Hi-Fi' para soar moderno."
            },
            {
                status: false,
                txt: "Wireless Fidelity, uma tecnologia criada pela NASA."
            },
            {
                status: false,
                txt: "World Internet Fiber Integration."
            },
            {
                status: false,
                txt: "Wireless Interface for Information."
            }
        ]
    },
    // -------------------------------Steve Jobs e o Atari-----------------------
    {
        pergunta: "Antes de fundar a Apple, Steve Jobs trabalhou em qual empresa de games?",
        respostas: [
            {
                status: true,
                txt: "Na Atari, ajudando a desenvolver o jogo Breakout."
            },
            {
                status: false,
                txt: "Na Nintendo, como designer de personagens."
            },
            {
                status: false,
                txt: "Na SEGA, no desenvolvimento do console Mega Drive."
            },
            {
                status: false,
                txt: "Na Microsoft, na criação de interfaces gráficas."
            }
        ]
    },
    // Continuação do questionsData

    // -------------------------------Primeiro computador pessoal-----------------------
    {
        pergunta: "Qual é considerado o primeiro computador pessoal da história?",
        respostas: [
            {
                status: true,
                txt: "O Altair 8800, lançado em 1975."
            },
            {
                status: false,
                txt: "O Macintosh 128k, da Apple."
            },
            {
                status: false,
                txt: "O IBM PC, lançado em 1981."
            },
            {
                status: false,
                txt: "O Commodore 64, famoso nos anos 80."
            }
        ]
    },
    // -------------------------------Nome Python-----------------------
    {
        pergunta: "Por que a linguagem de programação 'Python' tem esse nome?",
        respostas: [
            {
                status: true,
                txt: "Porque o criador, Guido van Rossum, era fã do grupo de comédia Monty Python."
            },
            {
                status: false,
                txt: "Porque a linguagem é inspirada na agilidade da cobra python."
            },
            {
                status: false,
                txt: "É uma sigla para 'Program Your Tech Online Now'."
            },
            {
                status: false,
                txt: "Porque foi criada em um zoológico onde havia cobras python."
            }
        ]
    },
    // -------------------------------Primeiro mouse-----------------------
    {
        pergunta: "Quem inventou o mouse de computador?",
        respostas: [
            {
                status: true,
                txt: "Douglas Engelbart, em 1964, com uma estrutura de madeira e rodas."
            },
            {
                status: false,
                txt: "Steve Jobs, para o Macintosh original."
            },
            {
                status: false,
                txt: "Bill Gates, enquanto desenvolvia o Windows 1.0."
            },
            {
                status: false,
                txt: "Tim Berners-Lee, junto com a criação da internet."
            }
        ]
    },
    // -------------------------------Nome do sistema Android-----------------------
    {
        pergunta: "De onde vem o nome 'Android'?",
        respostas: [
            {
                status: true,
                txt: "Era o apelido de um dos fundadores da empresa que criou o sistema."
            },
            {
                status: false,
                txt: "Foi criado como sigla para 'Advanced Network Device Operating System'."
            },
            {
                status: false,
                txt: "Foi uma homenagem à série Star Wars, por causa dos androides."
            },
            {
                status: false,
                txt: "Veio de um software russo de robótica."
            }
        ]
    },
    // -------------------------------Internet pública-----------------------
    {
        pergunta: "Quando a internet passou a ser acessível ao público em geral?",
        respostas: [
            {
                status: true,
                txt: "Nos anos 90, com a popularização dos navegadores e provedores."
            },
            {
                status: false,
                txt: "Em 1980, com a criação do primeiro computador pessoal."
            },
            {
                status: false,
                txt: "No início dos anos 2000, com o surgimento do Google."
            },
            {
                status: false,
                txt: "Em 1970, com a fundação da Microsoft."
            }
        ]
    },
    // -------------------------------WWW-----------------------
    {
        pergunta: "O que significa a sigla 'WWW'?",
        respostas: [
            {
                status: true,
                txt: "World Wide Web, a rede mundial de páginas da internet."
            },
            {
                status: false,
                txt: "Web Wireless Way, sistema de rede sem fio."
            },
            {
                status: false,
                txt: "World Web Window, portal de busca global."
            },
            {
                status: false,
                txt: "Web World Watch, sistema de monitoramento online."
            }
        ]
    },
    // -------------------------------Primeiro navegador-----------------------
    {
        pergunta: "Qual foi o primeiro navegador da web?",
        respostas: [
            {
                status: true,
                txt: "O WorldWideWeb, criado por Tim Berners-Lee em 1990."
            },
            {
                status: false,
                txt: "O Internet Explorer, da Microsoft."
            },
            {
                status: false,
                txt: "O Netscape Navigator, em 1993."
            },
            {
                status: false,
                txt: "O Google Chrome, em 2008."
            }
        ]
    },
    // -------------------------------HTML-----------------------
    {
        pergunta: "Quem criou a linguagem HTML?",
        respostas: [
            {
                status: true,
                txt: "Tim Berners-Lee, para estruturar documentos na web."
            },
            {
                status: false,
                txt: "Mark Zuckerberg, ao criar o Facebook."
            },
            {
                status: false,
                txt: "Linus Torvalds, criador do Linux."
            },
            {
                status: false,
                txt: "Steve Wozniak, cofundador da Apple."
            }
        ]
    },
    // -------------------------------Símbolo '@' no e-mail-----------------------
    {
        pergunta: "Por que o símbolo '@' foi usado nos e-mails?",
        respostas: [
            {
                status: true,
                txt: "Porque separava o nome do usuário do nome do servidor."
            },
            {
                status: false,
                txt: "Por ser um símbolo popular em matemática."
            },
            {
                status: false,
                txt: "Porque era a única opção de caractere especial disponível."
            },
            {
                status: false,
                txt: "Era uma homenagem à primeira letra do nome do criador do e-mail."
            }
        ]
    },
    // -------------------------------Primeiro sistema operacional com GUI-----------------------
    {
        pergunta: "Qual foi o primeiro sistema operacional com interface gráfica (GUI)?",
        respostas: [
            {
                status: true,
                txt: "O Xerox Alto, criado nos anos 70."
            },
            {
                status: false,
                txt: "O Windows 95, da Microsoft."
            },
            {
                status: false,
                txt: "O MS-DOS, da IBM."
            },
            {
                status: false,
                txt: "O Mac OS, da Apple."
            }
        ]
    },
    // -------------------------------Primeiro site da internet-----------------------
    {
        pergunta: "Qual foi o conteúdo do primeiro site da internet?",
        respostas: [
            {
                status: true,
                txt: "Explicações sobre o que era a web e como usá-la."
            },
            {
                status: false,
                txt: "Um artigo científico sobre física de partículas."
            },
            {
                status: false,
                txt: "A agenda de eventos do CERN."
            },
            {
                status: false,
                txt: "Uma homepage com curiosidades sobre astronomia."
            }
        ]
    },
    // -------------------------------Criador do Windows-----------------------
    {
        pergunta: "Quem liderou o desenvolvimento do sistema operacional Windows?",
        respostas: [
            {
                status: true,
                txt: "Bill Gates, fundador da Microsoft."
            },
            {
                status: false,
                txt: "Steve Jobs, após sair da Apple."
            },
            {
                status: false,
                txt: "Tim Berners-Lee, criador da web."
            },
            {
                status: false,
                txt: "Dennis Ritchie, criador da linguagem C."
            }
        ]
    },
    // -------------------------------Nome do mascote do Linux-----------------------
    {
        pergunta: "Qual o nome do mascote do Linux, um pinguim?",
        respostas: [
            {
                status: true,
                txt: "Tux."
            },
            {
                status: false,
                txt: "Pingux."
            },
            {
                status: false,
                txt: "Lin."
            },
            {
                status: false,
                txt: "Byte."
            }
        ]
    },
    // -------------------------------Origem do nome Mozilla Firefox-----------------------
    {
        pergunta: "De onde vem o nome 'Firefox' no navegador?",
        respostas: [
            {
                status: true,
                txt: "É uma referência ao panda-vermelho, também chamado de 'fire fox'."
            },
            {
                status: false,
                txt: "Porque o navegador foi criado com um firewall embutido."
            },
            {
                status: false,
                txt: "Porque seu criador era fã da banda 'FireFox'."
            },
            {
                status: false,
                txt: "É uma sigla para 'Fast Internet Rendering for External eXploration'."
            }
        ]
    },
    // -------------------------------Criador do YouTube-----------------------
    {
        pergunta: "Quem criou o YouTube?",
        respostas: [
            {
                status: true,
                txt: "Três ex-funcionários do PayPal, em 2005."
            },
            {
                status: false,
                txt: "Larry Page e Sergey Brin, fundadores do Google."
            },
            {
                status: false,
                txt: "Mark Zuckerberg, junto com o Facebook."
            },
            {
                status: false,
                txt: "Steve Jobs, como um projeto paralelo da Apple."
            }
        ]
    },
    // -------------------------------Primeiro smartphone-----------------------
    {
        pergunta: "Qual é considerado o primeiro smartphone?",
        respostas: [
            {
                status: true,
                txt: "O IBM Simon, lançado em 1994, com tela sensível ao toque."
            },
            {
                status: false,
                txt: "O iPhone, lançado em 2007."
            },
            {
                status: false,
                txt: "O Nokia 3310, por sua popularidade."
            },
            {
                status: false,
                txt: "O PalmPilot, com agenda digital."
            }
        ]
    },
    // -------------------------------Origem do nome Spotify-----------------------
    {
        pergunta: "Como surgiu o nome 'Spotify'?",
        respostas: [
            {
                status: true,
                txt: "Foi inventado durante uma conversa entre os fundadores e não tem significado real."
            },
            {
                status: false,
                txt: "É uma combinação de 'spot' e 'amplify'."
            },
            {
                status: false,
                txt: "É uma sigla para 'Streaming Of Tunes Playing In Full Yield'."
            },
            {
                status: false,
                txt: "Vem do nome de uma antiga banda sueca."
            }
        ]
    },
    // -------------------------------Nome do ChatGPT-----------------------
    {
        pergunta: "O que significa o 'GPT' no nome ChatGPT?",
        respostas: [
            {
                status: true,
                txt: "Significa 'Generative Pre-trained Transformer'."
            },
            {
                status: false,
                txt: "É o nome do laboratório onde foi criado."
            },
            {
                status: false,
                txt: "É uma sigla para 'Global Processing Technology'."
            },
            {
                status: false,
                txt: "Refere-se ao nome do banco de dados usado na IA."
            }
        ]
    },
    // -------------------------------Google doodles-----------------------
    {
        pergunta: "Por que o Google começou a usar 'doodles' no seu logotipo?",
        respostas: [
            {
                status: true,
                txt: "Para comemorar datas especiais e homenagens culturais."
            },
            {
                status: false,
                txt: "Para testar a criatividade dos desenvolvedores da empresa."
            },
            {
                status: false,
                txt: "Como estratégia de marketing para novos produtos."
            },
            {
                status: false,
                txt: "Para reduzir o uso de imagens no carregamento da página."
            }
        ]
    },
    // -------------------------------Hackers do MIT-----------------------
    {
        pergunta: "Qual instituição foi conhecida por dar origem à cultura hacker?",
        respostas: [
            {
                status: true,
                txt: "MIT (Massachusetts Institute of Technology)."
            },
            {
                status: false,
                txt: "Stanford, com a criação do Google."
            },
            {
                status: false,
                txt: "Harvard, com o Facebook."
            },
            {
                status: false,
                txt: "Oxford, com pesquisas em criptografia."
            }
        ]
    }
];
