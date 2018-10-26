window.onload = init;

// cynosure - a89f2

function init() {
    let database = firebase.database();

    let form = document.getElementById('signupform')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (e.target.email && e.target.email.value) {
            let newEmailKey = database.ref().child('emails').push().key;
            database.ref('emails/' + newEmailKey).set(e.target.email.value);

            let ghi = document.getElementById('ghi');
            ghi.classList.add('hide');

            let sm = document.getElementById('sm');
            sm.classList.add('show');
        }
    });
}