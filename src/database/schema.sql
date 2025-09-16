CREATE TABLE personagens (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    imagem_url VARCHAR(255)
);

CREATE TABLE detalhes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    imagem VARCHAR(255),
    descricao_completa TEXT,
    frases TEXT,
    curiosidades TEXT
);

INSERT INTO personagens (nome, imagem_url) VALUES
('Ruby Bell', 'https://i.pinimg.com/736x/35/f7/69/35f769c06458928a5cde0d1e80e42271.jpg'),
('James Beaufort', 'https://i.pinimg.com/736x/62/05/60/620560bb2d730a259be893c4a65bfc29.jpg'),
('Lydia Beaufort', 'https://i.pinimg.com/736x/c0/96/be/c096be38aa0e245edccb83cb2b4a4080.jpg'),
('Mortimer Beaufort', 'https://i.pinimg.com/736x/e1/36/82/e136827a7933f5e1fc372255a30054f2.jpg'),
('Cordelia Beaufort', 'https://i.pinimg.com/736x/1b/a7/ac/1ba7ac9d5756824da37d8a0d3752d267.jpg'),
('Alistair Ellington', 'https://i.pinimg.com/736x/a8/52/c4/a852c46a733f6b51855939fa6c40fea6.jpg'),
('Elaine Ellington', 'https://i.pinimg.com/736x/52/f6/ae/52f6aea9f3fb319d8352dbc30d229db7.jpg'),
('Lin Wang', 'https://static.wikia.nocookie.net/maxton-hal/images/7/75/LinWang.jpg/revision/latest/thumbnail/width/360/height/450?cb=20240519064107'),
('Cyril Vega', 'https://i.pinimg.com/736x/09/fa/20/09fa20f779d403525681a454ac72b427.jpg'),
('Keshav "Kesh" Patel', 'https://static.wikia.nocookie.net/maxton-hal/images/0/02/Kesh.jpg/revision/latest?cb=20240520092308'),
('Ember Bell', 'https://i.pinimg.com/736x/5b/02/11/5b0211c6c6355338981a9127135bb3c4.jpg'),
('Angus Bell', 'https://i.pinimg.com/736x/4e/5d/68/4e5d686d5c21b6e1e7cdda9b81631e85.jpg'),
('Helen Bell', 'https://i.pinimg.com/736x/8d/88/dd/8d88dda67466117d284108b7db23b80f.jpg'),
('Graham Sutton', 'https://i.pinimg.com/736x/1c/fe/56/1cfe56f0edf689c33ae127cf26501ecc.jpg');


INSERT INTO detalhes (nome, imagem, descricao_completa, frases, curiosidades) VALUES
('Ruby Bell', 'https://i.pinimg.com/736x/35/f7/69/35f769c06458928a5cde0d1e80e42271.jpg', 'Bolsista inteligente e determinada, Ruby entra em Maxton Hall com o objetivo de conquistar uma vaga em Oxford.', 'Nunca deixe que o medo decida seu futuro.', 'Protagonista da historia, muito dedicada e ambiciosa.'),
('James Beaufort', 'https://i.pinimg.com/736x/62/05/60/620560bb2d730a259be893c4a65bfc29.jpg', 'Herdeiro rico e arrogante, James e desafiado por Ruby e se ve dividido entre o mundo de privilegios e seus sentimentos.', 'O que voce quer de mim?', 'Filho de familia poderosa, personagem complexo entre privilegios e emocoes.'),
('Lydia Beaufort', 'https://i.pinimg.com/736x/c0/96/be/c096be38aa0e245edccb83cb2b4a4080.jpg', 'Irma gemea de James, Lydia e ambiciosa e determinada a manter o legado da familia.', 'Eu sou a unica que pode salvar nossa familia.', 'Antagonista, ambiciosa e manipuladora.'),
('Mortimer Beaufort', 'https://i.pinimg.com/736x/e1/36/82/e136827a7933f5e1fc372255a30054f2.jpg', 'Pai de James e Lydia, Mortimer e um homem poderoso e controlador.', 'A familia vem em primeiro lugar.', 'Figura autoritaria e controlador da familia Beaufort.'),
('Cordelia Beaufort', 'https://i.pinimg.com/736x/1b/a7/ac/1ba7ac9d5756824da37d8a0d3752d267.jpg', 'Mae de James e Lydia, Cordelia e elegante e reservada.', 'A aparencia e tudo.', 'Mulher sofisticada que valoriza as aparencias.'),
('Alistair Ellington', 'https://i.pinimg.com/736x/a8/52/c4/a852c46a733f6b51855939fa6c40fea6.jpg', 'Melhor amigo de James e namorado de Keshav, Alistair e leal e protetor.', 'Voce sempre pode contar comigo.', 'Personagem coadjuvante, amigo fiel e protetor.'),
('Elaine Ellington', 'https://i.pinimg.com/736x/52/f6/ae/52f6aea9f3fb319d8352dbc30d229db7.jpg', 'Irma de Alistair e amiga de Ruby, Elaine e doce e compreensiva.', 'As vezes, as palavras nao sao necessarias.', 'Personagem doce, sempre pronta para apoiar os amigos.'),
('Lin Wang', 'https://static.wikia.nocookie.net/maxton-hal/images/7/75/LinWang.jpg/revision/latest/thumbnail/width/360/height/450?cb=20240519064107', 'Amiga proxima de Ruby, Lin e inteligente e sempre pronta para ajudar.', 'Juntas somos mais fortes.', 'Intelectual e colaborativa, amiga leal.'),
('Cyril Vega', 'https://i.pinimg.com/736x/09/fa/20/09fa20f779d403525681a454ac72b427.jpg', 'Amigo de James, Cyril e charmoso e sempre no centro das atencoes.', 'A vida e uma festa, aproveite.', 'Extrovertido e sociavel, gosta de estar no centro das atencoes.'),
('Keshav "Kesh" Patel', 'https://static.wikia.nocookie.net/maxton-hal/images/0/02/Kesh.jpg/revision/latest?cb=20240520092308', 'Namorado de Alistair, Keshav e gentil e apaixonado.', 'O amor e a resposta.', 'Personagem romantico e gentil.'),
('Ember Bell', 'https://i.pinimg.com/736x/5b/02/11/5b0211c6c6355338981a9127135bb3c4.jpg', 'Irma mais nova de Ruby, Ember e curiosa e cheia de energia.', 'Eu quero ser como voce, Ruby.', 'Personagem jovem e cheia de energia, admira a irma.'),
('Angus Bell', 'https://i.pinimg.com/736x/4e/5d/68/4e5d686d5c21b6e1e7cdda9b81631e85.jpg', 'Pai de Ruby e Ember, Angus e trabalhador e dedicado.', 'Familia e tudo.', 'Figura paterna dedicada e protetora.'),
('Helen Bell', 'https://i.pinimg.com/736x/8d/88/dd/8d88dda67466117d284108b7db23b80f.jpg', 'Mae de Ruby e Ember, Helen e amorosa e protetora.', 'Sempre estarei aqui para voces.', 'Mae carinhosa e cuidadosa.'),
('Graham Sutton', 'https://i.pinimg.com/736x/1c/fe/56/1cfe56f0edf689c33ae127cf26501ecc.jpg', 'Professor em Maxton Hall, Graham tem um caso com Lydia.', 'A educacao e a chave para o futuro.', 'Professor influente com vida pessoal complicada.');

