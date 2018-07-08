let citiesInfo = {
    'stockholm' : {
        'name' : 'Stockholm',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'helsinki' : {
        'name' : 'Helsinki',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'copenhagen' : {
        'name' : 'Copenhagen',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'oslo' : {
        'name' : 'Oslo',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'london' : {
        'name' : 'London',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'rome' : {
        'name' : 'Rome',
        'url': '#',
        'about_city': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
}

function createCity(name,about,link){
    let li = document.createElement('li');
    li.classList.add('city_card');
    li.dataset.city = name;
    li.innerHTML =`<div class='city_card_content'><h2 class='city_name'>${name}</h2><p class='city_info'>${about}</p><a href='${link}' class='pinkorange_button'>Join</a></div>`
    li.innerHTML += `<div class='cities_card_overlay'></div>`;
    li.style.backgroundImage = `url('../home/images_clean/cities/${name}.jpg')`;
    return li;
}

let citiesArray = Object.values(citiesInfo).map(el=>createCity(el.name,el.about_city,el.url));
let citiesHolder = document.querySelector('ul.cities_holder');
let statusLi = citiesHolder.querySelector('.status');
statusLi.classList.add('hide');

citiesArray.forEach(el=>{
    citiesHolder.appendChild(el)
})