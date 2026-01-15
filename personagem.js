let personagem = null;

function carregarPersonagem() {
    const personagemAtivo = localStorage.getItem('personagemAtivo');
    if (!personagemAtivo) {
        window.location.href = 'index.html';
        return;
    }

    personagem = JSON.parse(personagemAtivo);
    
    // Carregar dados do localStorage se existirem
    const salvo = localStorage.getItem(`ficha_${personagem.id}`);
    if (salvo) {
        const dados = JSON.parse(salvo);
        Object.assign(personagem, dados);
    }

    // Atualizar foto
    document.getElementById('fotoPrincipal').src = personagem.imagem;

    // Carregar campos
    document.getElementById('inputNome').value = personagem.nome;
    document.getElementById('inputNivel').value = personagem.nivel || 1;
    document.getElementById('inputClasse').value = personagem.classe || '';

    // Atributos
    document.getElementById('atributo-FOR').value = personagem.for || 0;
    document.getElementById('atributo-DES').value = personagem.des || 0;
    document.getElementById('atributo-CON').value = personagem.con || 0;
    document.getElementById('atributo-INT').value = personagem.int || 0;
    document.getElementById('atributo-SAB').value = personagem.sab || 0;
    document.getElementById('atributo-CAR').value = personagem.car || 0;

    // Vida e Mana
    document.getElementById('vidaAtual').value = personagem.vidaAtual || 150;
    document.getElementById('vidaMax').value = personagem.vidaMax || 150;
    document.getElementById('manaAtual').value = personagem.manaAtual || 100;
    document.getElementById('manaMax').value = personagem.manaMax || 100;

    // Perícias e Ataques
    carregarPericias();
    carregarAtaques();
    carregarPodereseMagias();

    // Atualizar barras
    atualizarBarras();
}

function carregarPodereseMagias() {
    const nomePersonagem = document.getElementById('inputNome').value;
    const personagensData = localStorage.getItem('personagensData');
    const personagensObj = personagensData ? JSON.parse(personagensData) : {};
    
    let poderes = [
        { nome: 'Poder 1', descricao: 'Descrição do poder 1', padrao: true },
        { nome: 'Poder 2', descricao: 'Descrição do poder 2', padrao: true }
    ];

    let magias = [
        { nome: 'Magia Acelerada - Aprimore', descricao: 'Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. Custo: +4 PM. Pré-requisito: lançar magias de 2º círculo', padrao: true },
        { nome: 'Magia limitada', descricao: 'Você soma seu atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um arcanista de 5º nível com int 4 e este poder pode gastar até 9 PM em cada magia.', padrao: true }
    ];

    // Carregar poderes e magias salvos do localStorage
    if (personagensObj[nomePersonagem]) {
        if (personagensObj[nomePersonagem].poderes && personagensObj[nomePersonagem].poderes.length > 0) {
            poderes = [...poderes, ...personagensObj[nomePersonagem].poderes];
        }
        if (personagensObj[nomePersonagem].magias && personagensObj[nomePersonagem].magias.length > 0) {
            magias = [...magias, ...personagensObj[nomePersonagem].magias];
        }
    }

    const containerPoderes = document.getElementById('listaPoderes');
    containerPoderes.innerHTML = poderes.map((poder, i) => `
        <div class="item-poder-magia" onclick="togglePoder(this)">
            <div class="item-poder-magia-titulo">
                <span>${poder.nome}</span>
                <div class="item-poder-magia-acoes">
                    <span class="item-poder-magia-icone">▼</span>
                    ${!poder.padrao ? `<span class="item-poder-magia-deletar" onclick="deletarPoderMagia('poderes', '${poder.nome}', event)">✕</span>` : ''}
                </div>
            </div>
            <div class="item-poder-magia-descricao">${poder.descricao}</div>
        </div>
    `).join('');

    const containerMagias = document.getElementById('listaMagias');
    containerMagias.innerHTML = magias.map((magia, i) => `
        <div class="item-poder-magia" onclick="togglePoder(this)">
            <div class="item-poder-magia-titulo">
                <span>${magia.nome}</span>
                <div class="item-poder-magia-acoes">
                    <span class="item-poder-magia-icone">▼</span>
                    ${!magia.padrao ? `<span class="item-poder-magia-deletar" onclick="deletarPoderMagia('magias', '${magia.nome}', event)">✕</span>` : ''}
                </div>
            </div>
            <div class="item-poder-magia-descricao">${magia.descricao}</div>
        </div>
    `).join('');
}

function togglePoder(elemento) {
    elemento.classList.toggle('expandido');
}

function deletarPoderMagia(tipo, nome, event) {
    event.stopPropagation();
    
    if (!confirm(`Tem certeza que deseja deletar "${nome}"?`)) {
        return;
    }

    const nomePersonagem = document.getElementById('inputNome').value;
    const personagensData = localStorage.getItem('personagensData');
    const personagensObj = personagensData ? JSON.parse(personagensData) : {};

    if (!personagensObj[nomePersonagem]) {
        personagensObj[nomePersonagem] = { poderes: [], magias: [] };
    }

    // Remove o item do array
    if (tipo === 'poderes') {
        personagensObj[nomePersonagem].poderes = personagensObj[nomePersonagem].poderes.filter(p => p.nome !== nome);
    } else {
        personagensObj[nomePersonagem].magias = personagensObj[nomePersonagem].magias.filter(m => m.nome !== nome);
    }

    localStorage.setItem('personagensData', JSON.stringify(personagensObj));
    carregarPodereseMagias();
}

function trocarAbaPoderMagia(aba, elemento) {
    // Remover classe ativa de todas as abas
    document.querySelectorAll('.aba-poderes-magias').forEach(el => el.classList.remove('ativa'));
    
    // Adicionar classe ativa à aba clicada
    elemento.classList.add('ativa');

    // Esconder todo conteúdo
    document.querySelectorAll('.conteudo-poder-magia').forEach(el => el.classList.remove('ativo'));

    // Mostrar conteúdo selecionado
    if (aba === 'poderes') {
        document.getElementById('conteudoPoderes').classList.add('ativo');
    } else {
        document.getElementById('conteudoMagias').classList.add('ativo');
    }
}

function carregarPericias() {
    const pericias = [
        'Acrobacia', 'Adestramento', 'Atletismo', 'Atuação', 'Cavalgar',
        'Conhecimento', 'Cura', 'Diplomacia', 'Enganação', 'Fortitude',
        'Furtividade', 'Guerra', 'Iniciativa', 'Intimidação', 'Investigação',
        'Jogatina', 'Ladinagem', 'Luta', 'Misticismo', 'Nobreza',
        'Ofício', 'Percepção', 'Pilotagem', 'Pontaria', 'Reflexos',
        'Religião', 'Sobrevivência', 'Vontade'
    ];

    const container = document.getElementById('periciasContainer');
    container.innerHTML = pericias.map((pericia, i) => {
        const bonus = parseInt(document.querySelector(`input[data-pericia="${i}"]`)?.value || 0);
        return `
        <div class="item-lista">
            <div class="item-dado" onclick="rolarD20Pericia('${pericia}', ${bonus})"><img src="d20.svg" alt="D20" style="width: 20px; height: 20px; object-fit: contain;"></div>
            <span class="item-nome">${pericia}</span>
            <input type="number" class="item-valor" data-pericia="${i}" value="0" onchange="salvarDados(); carregarPericias()">
        </div>
    `;
    }).join('');
}

function carregarAtaques() {
    const ataques = [
        { nome: 'Adaga', dano: '3d6' },
        { nome: 'Espada', dano: '2d8' }
    ];

    const container = document.getElementById('ataquesContainer');
    container.innerHTML = ataques.map((ataque, i) => `
        <div class="item-lista">
            <span class="item-nome">${ataque.nome}</span>
            <span class="item-valor">${ataque.dano}</span>
        </div>
    `).join('');
}

function atualizarBarras() {
    const vidaAtual = parseInt(document.getElementById('vidaAtual').value) || 0;
    const vidaMax = parseInt(document.getElementById('vidaMax').value) || 1;
    const manaAtual = parseInt(document.getElementById('manaAtual').value) || 0;
    const manaMax = parseInt(document.getElementById('manaMax').value) || 1;

    const vidaPorcentagem = Math.max(0, Math.min(100, (vidaAtual / vidaMax) * 100));
    const manaPorcentagem = Math.max(0, Math.min(100, (manaAtual / manaMax) * 100));

    document.getElementById('preencheVida').style.height = vidaPorcentagem + '%';
    document.getElementById('preencheMana').style.height = manaPorcentagem + '%';

    salvarDados();
}

function aumentarVida(valor) {
    const vidaInput = document.getElementById('vidaAtual');
    const vidaMax = parseInt(document.getElementById('vidaMax').value) || 1;
    let novaVida = parseInt(vidaInput.value) || 0;
    novaVida = Math.min(vidaMax, novaVida + valor);
    vidaInput.value = novaVida;
    atualizarBarras();
}

function diminuirVida(valor) {
    const vidaInput = document.getElementById('vidaAtual');
    let novaVida = parseInt(vidaInput.value) || 0;
    novaVida = Math.max(0, novaVida - valor);
    vidaInput.value = novaVida;
    atualizarBarras();
}

function aumentarMana(valor) {
    const manaInput = document.getElementById('manaAtual');
    const manaMax = parseInt(document.getElementById('manaMax').value) || 1;
    let novaMana = parseInt(manaInput.value) || 0;
    novaMana = Math.min(manaMax, novaMana + valor);
    manaInput.value = novaMana;
    atualizarBarras();
}

function diminuirMana(valor) {
    const manaInput = document.getElementById('manaAtual');
    let novaMana = parseInt(manaInput.value) || 0;
    novaMana = Math.max(0, novaMana - valor);
    manaInput.value = novaMana;
    atualizarBarras();
}

function salvarDados() {
    if (!personagem) return;

    const dados = {
        nome: document.getElementById('inputNome').value,
        nivel: parseInt(document.getElementById('inputNivel').value) || 1,
        classe: document.getElementById('inputClasse').value,
        for: parseInt(document.getElementById('atributo-FOR').value) || 0,
        des: parseInt(document.getElementById('atributo-DES').value) || 0,
        con: parseInt(document.getElementById('atributo-CON').value) || 0,
        int: parseInt(document.getElementById('atributo-INT').value) || 0,
        sab: parseInt(document.getElementById('atributo-SAB').value) || 0,
        car: parseInt(document.getElementById('atributo-CAR').value) || 0,
        vidaAtual: parseInt(document.getElementById('vidaAtual').value) || 0,
        vidaMax: parseInt(document.getElementById('vidaMax').value) || 0,
        manaAtual: parseInt(document.getElementById('manaAtual').value) || 0,
        manaMax: parseInt(document.getElementById('manaMax').value) || 0
    };

    localStorage.setItem(`ficha_${personagem.id}`, JSON.stringify(dados));
}

function atualizarNomeInicio() {
    salvarDados();
    const personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    const index = personagens.findIndex(p => p.id === personagem.id);
    if (index !== -1) {
        personagens[index].nome = document.getElementById('inputNome').value;
        localStorage.setItem('personagens', JSON.stringify(personagens));
    }
}

function rolarDado(lados, nome) {
    const resultado = Math.floor(Math.random() * lados) + 1;
    document.getElementById('nomeDado').textContent = nome;
    document.getElementById('numeroResultado').textContent = resultado;
    document.getElementById('modalResultado').classList.add('ativo');
}

function rolarD20Pericia(nomePericia, bonus) {
    const d20 = Math.floor(Math.random() * 20) + 1;
    const total = d20 + bonus;
    
    document.getElementById('nomeDado').textContent = `${nomePericia}`;
    document.getElementById('numeroResultado').innerHTML = `<strong>D20: ${d20} + ${bonus} = ${total}</strong>`;
    document.getElementById('modalResultado').classList.add('ativo');
}

function fecharModal() {
    document.getElementById('modalResultado').classList.remove('ativo');
}

function voltarInicio() {
    salvarDados();
    localStorage.removeItem('personagemAtivo');
    window.location.href = 'index.html';
}

function abrirModalPoderMagia() {
    document.getElementById('tipoPoderMagia').value = 'poderes';
    document.getElementById('nomePoderMagia').value = '';
    document.getElementById('descricaoPoderMagia').value = '';
    document.getElementById('modalPoderMagia').classList.add('ativo');
}

function fecharModalPoderMagia() {
    document.getElementById('modalPoderMagia').classList.remove('ativo');
}

function salvarPoderMagia() {
    const tipo = document.getElementById('tipoPoderMagia').value;
    const nome = document.getElementById('nomePoderMagia').value.trim();
    const descricao = document.getElementById('descricaoPoderMagia').value.trim();

    if (!nome) {
        alert('Por favor, insira um nome para o poder/magia');
        return;
    }

    const personagensData = localStorage.getItem('personagensData');
    const personagensObj = personagensData ? JSON.parse(personagensData) : {};
    const nomePersonagem = document.getElementById('inputNome').value;

    if (!personagensObj[nomePersonagem]) {
        personagensObj[nomePersonagem] = { poderes: [], magias: [] };
    }

    personagensObj[nomePersonagem][tipo].push({
        nome: nome,
        descricao: descricao
    });

    localStorage.setItem('personagensData', JSON.stringify(personagensObj));
    carregarPodereseMagias();
    fecharModalPoderMagia();
}

// Fechar modal ao clicar fora
document.getElementById('modalResultado').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharModal();
    }
});

const modalPoderMagia = document.getElementById('modalPoderMagia');
if (modalPoderMagia) {
    modalPoderMagia.addEventListener('click', function(e) {
        if (e.target === this) {
            fecharModalPoderMagia();
        }
    });
}

// Inicializar
carregarPersonagem();
