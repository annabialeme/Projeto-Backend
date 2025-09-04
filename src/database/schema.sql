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
 'https://fugitives.com/wp-content/uploads/2024/05/Ruby-Bell-In-Maxton-Hall-Explained.jpg',
 'Bolsista inteligente e determinada, Ruby entra em Maxton Hall com o objetivo de conquistar uma vaga em Oxford.',
 '“Nunca deixe que o medo decida seu futuro.”',
 'Protagonista da história, muito dedicada e ambiciosa.'
),

('James Beaufort',
 'https://fugitives.com/wp-content/uploads/2024/05/James-Beaufort-In-Maxton-Hall-Explained.jpg',
 'Herdeiro rico e arrogante, James é desafiado por Ruby e se vê dividido entre o mundo de privilégios e seus sentimentos.',
 '“O que você quer de mim?”',
 'Filho de família poderosa, personagem complexo entre privilégios e emoções.'
),

('Lydia Beaufort',
 'https://m.media-amazon.com/images/M/MV5BMTM5MTZmYmEtM2M1Ny00M2NhLThhY2UtMGVlNWM0MGY1N2Y5XkEyXkFqcGc@._V1_QL75_UY281_CR2,0,500,281_.jpg',
 'Irmã gêmea de James, Lydia é ambiciosa e determinada a manter o legado da família.',
 '“Eu sou a única que pode salvar nossa família.”',
 'Antagonista, ambiciosa e manipuladora.'
),

('Mortimer Beaufort',
 'https://static.wikia.nocookie.net/maxton-hal/images/5/5f/Mortimer1.jpg/revision/latest?cb=20240518183830',
 'Pai de James e Lydia, Mortimer é um homem poderoso e controlador.',
 '“A família vem em primeiro lugar.”',
 'Figura autoritária e controlador da família Beaufort.'
),

('Cordelia Beaufort',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLfvmq3NqcOjW92udicy4UIXw94rCpfk6pQ&s',
 'Mãe de James e Lydia, Cordelia é elegante e reservada.',
 '“A aparência é tudo.”',
 'Mulher sofisticada que valoriza as aparências.'
),

('Alistair Ellington',
 'https://static.wikia.nocookie.net/maxton-hal/images/8/8d/Alistair.jpg/revision/latest?cb=20240519064745',
 'Melhor amigo de James e namorado de Keshav, Alistair é leal e protetor.',
 '“Você sempre pode contar comigo.”',
 'Personagem coadjuvante, amigo fiel e protetor.'
),

('Elaine Ellington',
 'https://i.pinimg.com/736x/74/ce/eb/74ceebbb7f4b7188cab018589f01ab29.jpg',
 'Irmã de Alistair e amiga de Ruby, Elaine é doce e compreensiva.',
 '“Às vezes, as palavras não são necessárias.”',
 'Personagem doce, sempre pronta para apoiar os amigos.'
),

('Lin Wang',
 'https://static.wikia.nocookie.net/maxton-hal/images/7/75/LinWang.jpg/revision/latest?cb=20240519064107',
 'Amiga próxima de Ruby, Lin é inteligente e sempre pronta para ajudar.',
 '“Juntas somos mais fortes.”',
 'Intelectual e colaborativa, amiga leal.'
),

('Cyril Vega',
 'https://static.wikia.nocookie.net/maxton-hal/images/f/f9/Cyril_Vega.jpg/revision/latest?cb=20240520085948',
 'Amigo de James, Cyril é charmoso e sempre no centro das atenções.',
 '“A vida é uma festa, aproveite.”',
 'Extrovertido e sociável, gosta de estar no centro das atenções.'
),

('Keshav "Kesh" Patel',
 'https://static.wikia.nocookie.net/maxton-hal/images/0/02/Kesh.jpg/revision/latest?cb=20240520092308',
 'Namorado de Alistair, Keshav é gentil e apaixonado.',
 '“O amor é a resposta.”',
 'Personagem romântico e gentil.'
),

('Ember Bell',
 'https://i.pinimg.com/736x/5b/02/11/5b0211c6c6355338981a9127135bb3c4.jpg',
 'Irmã mais nova de Ruby, Ember é curiosa e cheia de energia.',
 '“Eu quero ser como você, Ruby.”',
 'Personagem jovem e cheia de energia, admira a irmã.'
),

('Angus Bell',
 'https://static.wikia.nocookie.net/maxton-hal/images/f/f2/AngusBell.jpg/revision/latest?cb=20240519035920',
 'Pai de Ruby e Ember, Angus é trabalhador e dedicado.',
 '“Família é tudo.”',
 'Figura paterna dedicada e protetora.'
),

('Helen Bell',
 'https://static.wikia.nocookie.net/maxton-hal/images/2/24/HelenBell1.jpg/revision/latest?cb=20240519034316',
 'Mãe de Ruby e Ember, Helen é amorosa e protetora.',
 '“Sempre estarei aqui para vocês.”',
 'Mãe carinhosa e cuidadosa.'
),

('Graham Sutton',
 'https://static.wikia.nocookie.net/maxton-hal/images/a/a0/Sutton.jpg/revision/latest?cb=20240519070512',
 'Professor em Maxton Hall, Graham tem um caso com Lydia.',
 '“A educação é a chave para o futuro.”',
 'Professor influente com vida pessoal complicada.'
);
