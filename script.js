document.addEventListener('DOMContentLoaded', function() {
    let fetchButton = document.getElementById('fetchButton');
    let filterButton = document.getElementById('filterButton');
    let cardsContainer = document.getElementById('cards');
    let usersData = [];

    fetchButton.addEventListener('click', () => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                usersData = data.users;
                displayData(usersData);
            })
            .catch(error => console.error('Error:', error));
    });

    filterButton.addEventListener('click', () => {
        let filteredData = usersData.filter(user => user.age < 40);
        displayData(filteredData);
    });

    function displayData(users) {
        cardsContainer.innerHTML = '';

        users.forEach(user => {
            let card = document.createElement('div');
            let name = document.createElement('p');
            let age = document.createElement('p');
            let address = document.createElement('p');

            name.innerHTML = `<span class="info-label">Name:</span> <span class="info-data">${user.firstName} ${user.lastName}</span>`;
            age.innerHTML = `<span class="info-label">Age:</span> <span class="info-data">${user.age}</span>`;

            let city = user.address?.city || 'No';
           
            address.innerHTML = `<span class="info-label">Adress:</span> <span class="info-data">${city}</span>`;

            card.classList.add('card');

            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(address);

            cardsContainer.appendChild(card);
        });
    }
});