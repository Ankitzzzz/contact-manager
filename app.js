const API = 'http://localhost:3000/api/contacts';


const loadContacts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    const tbody = document.getElementById('contacts');
    tbody.innerHTML = '';


    data.forEach(c => {
        tbody.innerHTML += `
<tr>
<td>${c.name}</td>
<td>${c.email}</td>
<td>${c.phone}</td>
<td><button onclick="deleteContact(${c.id})">Delete</button></td>
</tr>`;
    });
};


const deleteContact = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadContacts();
};


document.getElementById('contactForm').onsubmit = async e => {
    e.preventDefault();
    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value
        })
    });
    e.target.reset();
    loadContacts();
};


loadContacts();
