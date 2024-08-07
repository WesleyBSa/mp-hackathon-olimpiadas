const selectCountry = document.getElementById('select-country');
const medalTable = document.getElementById('medal-table');
const countryFlag = document.getElementById('country-flag');
const toggleDark = document.getElementById('toggle-dark');
const toggleLight = document.getElementById('toggle-light');
const selectRanking = document.getElementById('select-ranking');
const medalTableTop10 = document.getElementById('medal-table-top-10');
const medalTableTop10Body = document.getElementById('medal-table-top-10-body');

document.body.classList.add('clean-theme');

let countries = [];

fetch('https://apis.codante.io/olympic-games/countries')
    .then(response => response.json())
    .then(data => {
        countries = data.data;
        populateSelectCountry();
        populateMedalTableTop10();
    })
    .catch(error => console.error(error));

function populateSelectCountry() {
    selectCountry.innerHTML = '';
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.id;
        option.textContent = country.name;
        selectCountry.appendChild(option);
    });
}

selectCountry.addEventListener('change', () => {
    const selectedCountry = countries.find(country => country.id === selectCountry.value);
    if (selectedCountry) {
        const medalTableHtml = `
            <table>
                <tr>
                    <th>Medalha</th>
                    <th>Quantidade</th>
                </tr>
                <tr>
                    <td><i class="fas fa-medal gold"></i></td>
                    <td>${selectedCountry.gold_medals}</td>
                </tr>
                <tr>
                    <td><i class="fas fa-medal silver"></i></td>
                    <td>${selectedCountry.silver_medals}</td>
                </tr>
                <tr>
                    <td><i class="fas fa-medal bronze"></i></td>
                    <td>${selectedCountry.bronze_medals}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>${selectedCountry.total_medals}</td>
                </tr>
            </table>
        `;
        medalTable.innerHTML = medalTableHtml;
        
        if (selectedCountry.name === 'Brasil') {
            startFireworks();
        } else {
            stopFireworks();
        }
        
        countryFlag.innerHTML = `<img src="${selectedCountry.flag_url}" alt="${selectedCountry.name} flag">`;
    }
});

toggleDark.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('clean-theme');
});

toggleLight.addEventListener('click', () => {
    document.body.classList.add('clean-theme');
    document.body.classList.remove('dark-theme');
});

function populateMedalTableTop10() {
    const ranking = selectRanking.value;
    const top10Countries = countries.sort((a, b) => {
        if (ranking === 'rank') {
            return a.rank - b.rank;
        } else {
            return b.total_medals - a.total_medals;
        }
    }).slice(0, 10);

    medalTableTop10Body.innerHTML = '';
    top10Countries.forEach(country => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${country.flag_url}" alt="${country.name} flag"></td>
            <td>${country.name}</td>
            <td>${country.gold_medals}</td>
            <td>${country.silver_medals}</td>
            <td>${country.bronze_medals}</td>
            <td>${country.total_medals}</td>
        `;
        medalTableTop10Body.appendChild(row);
    });
}

selectRanking.addEventListener('change', () => {
    populateMedalTableTop10();
});

function startFireworks() {
    if (particlesJS) {
        particlesJS('country-flag', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FFD700"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }
}

function stopFireworks() {
    const canvas = document.querySelector('#country-flag canvas');
    if (canvas) {
        canvas.remove();
    }
}
