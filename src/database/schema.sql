CREATE TABLE personagens (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    imagem_url VARCHAR(255),
    descricao TEXT,
    frases TEXT,
    curiosidades TEXT
);

INSERT INTO personagens (nome, imagem_url, descricao, frases, curiosidades) VALUES
('Ruby Bell',
 '/uploads/ruby.jpg',
 'Bolsista inteligente e determinada, Ruby entra em Maxton Hall com o objetivo de conquistar uma vaga em Oxford.',
 'Nunca deixe que o medo decida seu futuro.',
 'Protagonista da historia, muito dedicada e ambiciosa.'
),

('James Beaufort',
 '/uploads/james.jpg',
 'Herdeiro rico e arrogante, James e desafiado por Ruby e se ve dividido entre o mundo de privilegios e seus sentimentos.',
 'O que voce quer de mim?',
 'Filho de familia poderosa, personagem complexo entre privilegios e emocoes.'
),

('Lydia Beaufort',
 '/uploads/lydia.jpg',
 'Irma gemea de James, Lydia e ambiciosa e determinada a manter o legado da familia.',
 'Eu sou a unica que pode salvar nossa familia.',
 'Antagonista, ambiciosa e manipuladora.'
),

('Mortimer Beaufort',
 '/uploads/mortimer.jpg',
 'Pai de James e Lydia, Mortimer e um homem poderoso e controlador.',
 'A familia vem em primeiro lugar.',
 'Figura autoritaria e controlador da familia Beaufort.'
),

('Cordelia Beaufort',
 '/uploads/cordelia.jpg',
 'Mae de James e Lydia, Cordelia e elegante e reservada.',
 'A aparencia e tudo.',
 'Mulher sofisticada que valoriza as aparencias.'
),

('Alistair Ellington',
 '/uploads/alistair.jpg',
 'Melhor amigo de James e namorado de Keshav, Alistair e leal e protetor.',
 'Voce sempre pode contar comigo.',
 'Personagem coadjuvante, amigo fiel e protetor.'
),

('Elaine Ellington',
 '/uploads/elaine.jpg',
 'Irma de Alistair e amiga de Ruby, Elaine e doce e compreensiva.',
 'As vezes, as palavras nao sao necessarias.',
 'Personagem doce, sempre pronta para apoiar os amigos.'
),

('Lin Wang',
 '/uploads/linwang.jpg',
 'Amiga proxima de Ruby, Lin e inteligente e sempre pronta para ajudar.',
 'Juntas somos mais fortes.',
 'Intelectual e colaborativa, amiga leal.'
),

('Cyril Vega',
 '/uploads/cyril.jpg',
 'Amigo de James, Cyril e charmoso e sempre no centro das atencoes.',
 'A vida e uma festa, aproveite.',
 'Extrovertido e sociavel, gosta de estar no centro das atencoes.'
),

('Keshav "Kesh" Patel',
 '/uploads/Kesh.jpg',
 'Namorado de Alistair, Keshav e gentil e apaixonado.',
 'O amor e a resposta.',
 'Personagem romantico e gentil.'
),

('Ember Bell',
 '/uploads/ember.jpg',
 'Irma mais nova de Ruby, Ember e curiosa e cheia de energia.',
 'Eu quero ser como voce, Ruby.',
 'Personagem jovem e cheia de energia, admira a irma.'
),

('Angus Bell',
 '/uploads/angus.jpg',
 'Pai de Ruby e Ember, Angus e trabalhador e dedicado.',
 'Familia e tudo.',
 'Figura paterna dedicada e protetora.'
),

('Helen Bell',
 '/uploads/helen.jpg',
 'Mae de Ruby e Ember, Helen e amorosa e protetora.',
 'Sempre estarei aqui para voces.',
 'Mae carinhosa e cuidadosa.'
),

('Graham Sutton',
 '/uploads/graham.jpg',
 'Professor em Maxton Hall, Graham tem um caso com Lydia.',
 'A educacao e a chave para o futuro.',
 'Professor influente com vida pessoal complicada.'
),

('Mr. Sutton',
 '/uploads/sutton.jpg',
 'Diretor de Maxton Hall, severo e muito respeitado pelos alunos.',
 'Disciplina e o pilar do sucesso.',
 'Figura de autoridade que busca manter a ordem na escola.'
),

('Percy',
 '/uploads/percy.jpg',
 'Aluno de Maxton Hall, figura misteriosa e intrigante cujo papel surge em momentos cruciais.',
 'Nem tudo e o que parece.',
 'Personagem enigmático, adiciona tensão e mistério ao ambiente escolar.'
); 

CREATE TABLE interacao (
    id SERIAL PRIMARY KEY, 
    personagem_id INT NOT NULL,
    nome_fan VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL, 
    conteudo TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (personagem_id) REFERENCES personagens (id) ON DELETE CASCADE);
    
INSERT INTO interacao (personagem_id, nome_fan, tipo, conteudo) VALUES
(1, 'João Silva', 'comentario', 'Adorei a determinação da Ruby!'),
(2, 'Maria Oliveira', 'comentario', 'James é um personagem muito complexo e interessante.'),
(4, 'Carlos Eduardo', 'comentario', 'Mortimer é muito controlador, mas essencial para a história.'),
(6, 'Ana Costa', 'comentario', 'Alistair é um amigo muito leal e protetor.'),
(7, 'Beatriz Santos', 'comentario', 'Elaine é tão doce e compreensiva!'),
(9, 'Gabriela Rocha', 'comentario', 'Cyril é sempre o centro das atenções, adoro isso nele!'),
(11, 'Larissa Oliveira', 'comentario', 'Ember é tão cheia de energia, uma personagem adorável.'),
(12, 'Thiago Martins', 'comentario', 'Angus é um pai incrível, sempre dedicado à família.'),
(14, 'Vinícius Ferreira', 'comentario', 'Graham é um professor muito influente, mas cheio de segredos.');