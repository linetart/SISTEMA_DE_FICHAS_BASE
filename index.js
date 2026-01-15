// Dados dos personagens
let personagens = JSON.parse(localStorage.getItem('personagens')) || [
    { id: 1, nome: 'Personagem 1', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gMTwvdGV4dD48L3N2Zz4=', chave: '1234' },
    { id: 2, nome: 'Personagem 2', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gMjwvdGV4dD48L3N2Zz4=', chave: '5678' },
    { id: 3, nome: 'Personagem 3', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gMzwvdGV4dD48L3N2Zz4=', chave: '9012' },
    { id: 4, nome: 'Personagem 4', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gNDwvdGV4dD48L3N2Zz4=', chave: '3456' },
    { id: 5, nome: 'Personagem 5', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gNTwvdGV4dD48L3N2Zz4=', chave: '7890' },
    { id: 6, nome: 'Personagem 6', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gNjwvdGV4dD48L3N2Zz4=', chave: '2345' },
    { id: 7, nome: 'Personagem 7', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gNzwvdGV4dD48L3N2Zz4=', chave: '6789' },
    { id: 8, nome: 'Personagem 8', imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5JbWFnZW0gODwvdGV4dD48L3N2Zz4=', chave: '0123' }
];

let personagemSelecionado = null;

function renderizarPersonagens() {
    const container = document.getElementById('personagensContainer');
    container.innerHTML = '';

    personagens.forEach(personagem => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image" onclick="selecionarPersonagem(${personagem.id})">
                <img src="${personagem.imagem}" alt="${personagem.nome}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="card-name">${personagem.nome}</div>
        `;
        container.appendChild(card);
    });
}

function selecionarPersonagem(id) {
    personagemSelecionado = personagens.find(p => p.id === id);
    document.getElementById('nomepersonagem').textContent = personagemSelecionado.nome;
    document.getElementById('inputChave').value = '';
    document.getElementById('erroDiv').textContent = '';
    document.getElementById('modalChave').classList.add('ativo');
    document.getElementById('inputChave').focus();
}

function verificarChave() {
    const chave = document.getElementById('inputChave').value;
    const erroDiv = document.getElementById('erroDiv');

    if (chave === personagemSelecionado.chave) {
        // Armazena o personagem selecionado
        localStorage.setItem('personagemAtivo', JSON.stringify(personagemSelecionado));
        // Redireciona para a página do personagem
        window.location.href = 'personagem.html';
    } else {
        erroDiv.textContent = 'Chave de acesso incorreta!';
        document.getElementById('inputChave').value = '';
    }
}

function fecharModal() {
    document.getElementById('modalChave').classList.remove('ativo');
    personagemSelecionado = null;
}

function abrirGerenciador() {
    const conteudo = document.getElementById('gerenciadorConteudo');
    conteudo.innerHTML = `
        <div style="max-height: 400px; overflow-y: auto; margin-bottom: 20px;">
            ${personagens.map((p, i) => `
                <div style="display: grid; grid-template-columns: 1fr 2fr 1fr auto; gap: 10px; align-items: center; margin-bottom: 15px; padding: 10px; background-color: #f5f5f5; border: 2px solid #000; border-radius: 0px;">
                    <input type="text" id="nome_${i}" value="${p.nome}" placeholder="Nome" style="padding: 6px; background-color: #fff; border: 1px solid #000; color: #000; border-radius: 0px;">
                    <input type="file" id="imagem_${i}" accept="image/*" style="padding: 6px; background-color: #fff; border: 1px solid #000; color: #000; border-radius: 0px;" onchange="previewImagem(${i})">
                    <input type="password" id="chave_${i}" value="${p.chave}" placeholder="Chave" style="padding: 6px; background-color: #fff; border: 1px solid #000; color: #000; border-radius: 0px;">
                    <button onclick="removerPersonagem(${i})" style="padding: 6px 12px; background-color: #fff; border: 2px solid #000; color: #000; font-size: 12px; border-radius: 0px; font-weight: 600; text-transform: uppercase;">Remover</button>
                </div>
                <div id="preview_${i}" style="text-align: center; margin-bottom: 10px; display: none;">
                    <img id="previewImg_${i}" style="max-width: 100px; max-height: 100px; border: 1px solid #000;">
                </div>
            `).join('')}
        </div>
        <button onclick="salvarPersonagens()" style="width: 100%; margin-bottom: 10px; background-color: #fff; border: 2px solid #000; color: #000; padding: 10px; font-weight: 600; text-transform: uppercase; border-radius: 0px;">Salvar Alterações</button>
        <button onclick="adicionarPersonagem()" style="width: 100%; background-color: #fff; border: 2px solid #000; color: #000; padding: 10px; font-weight: 600; text-transform: uppercase; border-radius: 0px;">Adicionar Novo</button>
    `;
    document.getElementById('modalGerenciador').classList.add('ativo');
}

function previewImagem(index) {
    const fileInput = document.getElementById(`imagem_${index}`);
    const preview = document.getElementById(`preview_${index}`);
    const previewImg = document.getElementById(`previewImg_${index}`);
    
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            preview.style.display = 'block';
            personagens[index].imagem = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function fecharModalGerenciador() {
    document.getElementById('modalGerenciador').classList.remove('ativo');
}

function salvarPersonagens() {
    personagens.forEach((p, i) => {
        p.nome = document.getElementById(`nome_${i}`).value || p.nome;
        p.chave = document.getElementById(`chave_${i}`).value || p.chave;
    });
    localStorage.setItem('personagens', JSON.stringify(personagens));
    renderizarPersonagens();
    fecharModalGerenciador();
    alert('Personagens salvos com sucesso!');
}

function adicionarPersonagem() {
    const novoId = Math.max(...personagens.map(p => p.id)) + 1;
    personagens.push({
        id: novoId,
        nome: `Personagem ${novoId}`,
        imagem: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI4MCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjOTk5Ij5ObyBhZGRlZDwvdGV4dD48L3N2Zz4=',
        chave: 'senha123'
    });
    abrirGerenciador();
}

function removerPersonagem(index) {
    if (confirm('Tem certeza que deseja remover este personagem?')) {
        personagens.splice(index, 1);
        abrirGerenciador();
    }
}

// Inicializar
renderizarPersonagens();
