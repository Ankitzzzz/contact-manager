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
