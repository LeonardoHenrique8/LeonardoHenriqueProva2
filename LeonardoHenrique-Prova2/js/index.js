const itens = ['descricao', 'valor', 'datavenci', 'tipo']

const inicio = () => {
    const btn = document.getElementById('addInfo')
    btn.onclick = adicionarInfo
}

const adicionarInfo = () => {
    const table = document.getElementById('informacao')
    const tr = document.createElement('tr')
    const tBody = table.tBodies[0]
    tBody.appendChild(tr)
    itens.forEach(inputId => 
        novaColuna(tr, document.getElementById(inputId).value)
    )
}

const novaColuna = (line, content) => {
    const td = document.createElement('td')
    td.innerHTML = content
    line.appendChild(td)
}

inicio()