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
('Ruby Bell', '/uploads/ruby.jpg'),
('James Beaufort', '/uploads/james.jpg'),
('Lydia Beaufort', '/uploads/lydia.jpg'),
('Mortimer Beaufort', '/uploads/mortimer.jpg'),
('Cordelia Beaufort', '/uploads/cordelia.jpg'),
('Alistair Ellington', '/uploads/alistair.jpg'),
('Elaine Ellington', '/uploads/elaine.jpg');

INSERT INTO detalhes (nome, imagem, descricao_completa, frases, curiosidades) VALUES
('Ruby Bell', '/uploads/ruby.jpg', 'Bolsista inteligente e determinada, Ruby entra em Maxton Hall com o objetivo de conquistar uma vaga em Oxford.', 'Nunca deixe que o medo decida seu futuro.', 'Protagonista da historia, muito dedicada e ambiciosa.'),
('James Beaufort', '/uploads/james.jpg', 'Herdeiro rico e arrogante, James e desafiado por Ruby e se ve dividido entre o mundo de privilegios e seus sentimentos.', 'O que voce quer de mim?', 'Filho de familia poderosa, personagem complexo entre privilegios e emocoes.'),
('Lydia Beaufort', '/uploads/lydia.jpg', 'Irma gemea de James, Lydia e ambiciosa e determinada a manter o legado da familia.', 'Eu sou a unica que pode salvar nossa familia.', 'Antagonista, ambiciosa e manipuladora.'),
('Mortimer Beaufort', '/uploads/mortimer.jpg', 'Pai de James e Lydia, Mortimer e um homem poderoso e controlador.', 'A familia vem em primeiro lugar.', 'Figura autoritaria e controlador da familia Beaufort.'),
('Cordelia Beaufort', '/uploads/cordelia.jpg', 'Mae de James e Lydia, Cordelia e elegante e reservada.', 'A aparencia e tudo.', 'Mulher sofisticada que valoriza as aparencias.'),
('Alistair Ellington', '/uploads/alistair.jpg', 'Melhor amigo de James e namorado de Keshav, Alistair e leal e protetor.', 'Voce sempre pode contar comigo.', 'Personagem coadjuvante, amigo fiel e protetor.'),
('Elaine Ellington', '/uploads/elaine.jpg', 'Irma de Alistair e amiga de Ruby, Elaine e doce e compreensiva.', 'As vezes, as palavras nao sao necessarias.', 'Personagem doce, sempre pronta para apoiar os amigos.'),
('Lin Wang', '/uploads/linwang.jpg', 'Amiga proxima de Ruby, Lin e inteligente e sempre pronta para ajudar.', 'Juntas somos mais fortes.', 'Intelectual e colaborativa, amiga leal.'),
('Cyril Vega', '/uploads/cyril.jpg', 'Amigo de James, Cyril e charmoso e sempre no centro das atencoes.', 'A vida e uma festa, aproveite.', 'Extrovertido e sociavel, gosta de estar no centro das atencoes.'),
('Keshav "Kesh" Patel', '/uploads/Kesh.jpg', 'Namorado de Alistair, Keshav e gentil e apaixonado.', 'O amor e a resposta.', 'Personagem romantico e gentil.'),
('Ember Bell', '/uploads/ember.jpg', 'Irma mais nova de Ruby, Ember e curiosa e cheia de energia.', 'Eu quero ser como voce, Ruby.', 'Personagem jovem e cheia de energia, admira a irma.'),
('Angus Bell', '/uploads/angus.jpg', 'Pai de Ruby e Ember, Angus e trabalhador e dedicado.', 'Familia e tudo.', 'Figura paterna dedicada e protetora.'),
('Helen Bell', '/uploads/helen.jpg', 'Mae de Ruby e Ember, Helen e amorosa e protetora.', 'Sempre estarei aqui para voces.', 'Mae carinhosa e cuidadosa.'),
('Graham Sutton', '/uploads/graham.jpg', 'Professor em Maxton Hall, Graham tem um caso com Lydia.', 'A educacao e a chave para o futuro.', 'Professor influente com vida pessoal complicada.'),
('Mr. Sutton', '/uploads/sutton.jpg', 'Diretor de Maxton Hall, severo e muito respeitado pelos alunos.', 'Disciplina e o pilar do sucesso.', 'Figura de autoridade que busca manter a ordem na escola.'),
('Percy', '/uploads/percy.jpg', 'Aluno de Maxton Hall, figura misteriosa e intrigante cujo papel surge em momentos cruciais.', 'Nem tudo e o que parece.', 'Personagem enigmático, adiciona tensão e mistério ao ambiente escolar.');

