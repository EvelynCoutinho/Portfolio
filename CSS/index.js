function submitForm() {
    var users = [{ username: "daniel.candido", password: "daniel1234" }, { username: "evelyn.coutinho", password: "vivizinha123" }]

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalBody = document.getElementById('modal-body');

    if (!username || !password) {
        modalTitle.innerText = 'Erro!'
        modalBody.innerText = 'Usuário e senha são obrigatórios!).'
        modal.style.display = 'block'
        return;
    }

    if (password.length < 8) {
        modalTitle.innerText = 'Atenção!'
        modalBody.innerText = 'Senha fraca'
        modal.style.display = 'block'
        return;
    }

    var userExist = users.find(user => user.username === username);

    if (userExist && userExist.password === password) {
        modalTitle.innerText = 'Sucesso!'
        modalBody.innerText = 'Usuário logado.'

        modal.style.display = 'block'
    } else {
        modalTitle.innerText = 'Erro!'
        modalBody.innerText = 'Usuário não encontrado.'

        modal.style.display = 'block'
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = 'none';
    }
}

const form = document.getElementById('formulario')

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}