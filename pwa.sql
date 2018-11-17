-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3300
-- Generation Time: 29-Out-2018 às 11:15
-- Versão do servidor: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pwa`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `banner` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `banner`
--

INSERT INTO `banner` (`id`, `titulo`, `categoria_id`, `banner`) VALUES
(1, 'Samsung', 2, 'banner1.png'),
(2, 'Aspirador Eletrolux', 4, 'banner2.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `categoria`) VALUES
(1, 'Tvs'),
(2, 'Telefonia'),
(3, 'Games'),
(4, 'Eletros');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `foto` varchar(30) NOT NULL,
  `descricao` text NOT NULL,
  `valor` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `categoria_id`, `foto`, `descricao`, `valor`) VALUES
(1, 'Smartphone Motorola Moto G6 Play Dual Chip Android Oreo - 8.0 Tela 5.7', 2, '133453169_1GG.png', 'Misturando inovação, modernidade e qualidade, o novo moto g6 play chegou para deixar tudo o que você precisa na palma da sua mão, desbravando um mundo de novidades e experiências extremamente inesquecíveis.\r\n\r\nCom processador octa-core de 1,4 GHz, 3GB de RAM(1), bateria que dura mais de um dia(2) e carregamento TurboPowerTM, você executa suas tarefas sem se preocupar. Além disso, sua deslumbrante Tela Max Vision permite com que você veja sua vida em tela cheia, já que pode assistir a tudo em um incrível espaço HD de 5,7 polegadas.\r\n\r\nPensa que acabou? Então prepare-se: este novo integrante da Família moto g6 possui design único feito com polímero de vidro.E não para por aí!\r\n\r\nAgora você pode registrar todos os seus momentos em fotos incríveis, já que o moto g6 play vem com câmera traseira de 13MP e câmera frontal de 8MP com flash LED. Ah, e ele tem Android Puro 8.0 Oreo, a última versão do sistema operacional mais utilizado em todo o mundo. moto g6 play: com a vida em tela cheia, você se diverte muito mais.', 999.9),
(2, 'Smartphone Samsung Galaxy S9 Dual Chip Android 8.0 Tela 5.8 Octa-Core 2.8GHz', 2, '133274700_1GG.jpg', 'A lente de abertura dupla se adapta como o olho humano, se alternando automaticamente entre várias condições de iluminação com facilidade – fazendo com que suas fotos fiquem incríveis, seja no claro ou com pouca luz, de dia ou de noite. A versão do Galaxy S9+ ainda conta com câmera dupla traseira (duas lentes).\r\n\r\n', 3190.9),
(3, 'Game Marvels Spider-Man - PS4', 3, '133780784_1GG.jpg', 'Marvel\'s Spider-Man\r\n\r\nMarvel\'s Spider-Man traz seu lançador de teias favorito em uma história diferente de qualquer outra antes vista. Agora como um super-herói experiente, Peter Parker tem estado ocupado combatendo o crime nas ruas como o Homem-Aranha. E justamente quando ele está disposto a priorizar sua vida como Peter, um novo vilão chega para ameaçar New York. Enfrentando adversidades avassaladoras e enormes riscos, o Homem-Aranha terá de mostrar sua força e ser superior.\r\n\r\nA Sony Interactive Entertainment, a Marvel e a Insomniac Games apresentam Marvel¿s Spider-Man exclusivamente para o PlayStation 4.\r\n\r\nSeja o Homem-Aranha\r\n\r\nApós oito anos usando a máscara, Peter Parker agora é um mestre na luta contra o crime. Sinta todo o poder de um Homem-Aranha mais experiente com uma mecânica de combate improvisada, habilidades acrobáticas dinâmicas, movimentos urbanos brandos e interações com o ambiente. Não sendo mais um principiante, esse é o Homem-Aranha mais habilidoso que você já jogou.\r\n\r\nOs mundos se colidem\r\n\r\nOs mundos de Peter Parker e do Homem-Aranha se colidem em uma história original cheia de ação. Nesse novo universo do Homem-Aranha, os personagens famosos das vidas de Peter e do Homem-Aranha foram reinventados para exercerem papéis únicos.\r\n\r\nA Nova York da Marvel é seu parque de diversões\r\n\r\nA Grande Maçã ganha vida como o mundo mais vasto e interativo da Insomniac até agora. Percorra bairros vibrantes e capture vistas espetaculares de locais famosos da Marvel e de Manhattan. Use o ambiente para derrotar vilões com golpes épicos em uma ação digna de sucessos de bilheteria.', 179.9),
(4, 'Game Terra Média Sombras da Guerra - PS4', 3, '133400614_1GG.jpg', 'Terra-média: Sombras da Guerra é a sequência do aclamado Terra-média: Sombras de Mordor, vencedor de mais de 50 prêmios do setor, incluindo Jogo do Ano de 2015 da Game Developers Choice Awards, Inovação em Jogos nos D.I.C.E. Awards de 2015 e o BAFTA por Design de Jogo. Em Terra-média: Sombras da Guerra, o jogador empunhará um novo Anel do Poder e enfrentará os inimigos mais mortais, incluindo Sauron e Nâzgul, numa batalha monumental pela Terra-média. Este RPG em mundo aberto ganha vida com a expansão do premiado sistema Nemesis. A personalização robusta de Terra-média: Sombras de Mordor agora se aplica ao mundo inteiro onde os ambientes e personagens são moldados pelas ações e decisões do jogador, criando um mundo pessoal único para cada experiência de jogo.\r\n', 189.9),
(5, 'Smart TV LED 58 Samsung 58mu6120 Ultra HD 4K com Conversor Digital Integrado 3 HDMI 2 USB Wi-Fi', 1, '132710709_1GG.png', '4K de verdadeA TV Samsung MU6120 garante o melhor da tecnologia UHD, com painéis RGB e com fidelidade de cores , sem sub-píxel branco. Certificada pelas principais associações internacionais do setor.', 3200.99),
(6, 'Fritadeira Eletrica Master Fry, Marca Ello, Modelo Eaf101, 220V/60Hz', 4, '121413291_1GG.jpg', 'Com a Fritadeira Elétrica Ello Eletro suas receitas ficarão crocantes e saudáveis com apenas um toque! \r\n\r\nA Fritadeira possui tecnologia a ar que elimina a gordura indesejada dos alimentos e sistema de controle de temperatura de 80 a 200°C. Com capacidade de 1500W, a fritadeira comporta carnes, peixes e legumes. \r\n\r\nConta com timer com tempos pré-definidos em até 30 minutos, bandeja revestida com camada especial antiaderente, pés antiderrapantes e trava de segurança que liga e desliga o aparelho ao ser aberto. ', 365.9),
(7, 'Smart TV QLED 55 Samsung Q6F Ultra HD 4k com Conversor Digital, QSmart Controle Remoto Único', 1, '133294145_1GG.jpg', 'Ter uma TV de tela grande em casa é muito bom, não é mesmo? Ainda mais quando ela conta com recursos modernos, que proporcionam conforto e bons momentos de entretenimento para quem está assistindo. A Smart TV QLED 55\" Samsung QN55Q6FAMGXZD Ultra HD 4k é assim, ela vai te proporcionar maior nitidez, clareza e definição, para você assistir e curtir ao máximo seus programas, filmes e series preferidos. Com design moderno, imagem em HD 4K, conexões HDMI e USB, conversor digital integrado, Wi-Fi integrado, One Connect Mini e muito mais. Não perca mais tempo, transforme sua sala em um verdadeira sala de cinema.', 4300.9),
(8, 'Aspirador de Pó Midea Robô Smart Grafite', 4, '131782882_1GG.jpg', 'O aspirador de pó robô Midea Smart (VRA81B) é um aparelho inteligente, prático, que libera o usuário para fazer outras coisas enquanto a limpeza do piso é feita. O aspirador trabalha sozinho e pode ser controlado por controle remoto. É um produto bivolt, com bateria recarregável, e sistema de autorrecarga - quando a bateria está acabando o aspirador retorna para a base sozinho para recarregar. Além disso, possui sensor de obstáculos, redirecionando o trajeto quando encontra uma escada ou qualquer outro obstáculo. Produto excelente para quem tem animal de estimação que solta pelos e requer aspirar frequentemente o piso.', 790.9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
