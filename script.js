//add images value
var models = [
{
    name: 'legolas',
    image: '/assets/img/legolas.jpg',
    text: 'Nay, time does not tarry ever, but change and growth is not in all things and places alike. For the Elves the world moves, and it moves both very swift and very slow.',
    link:'https://lotr.fandom.com/wiki/Legolas'
},
{
    name: 'Gimli',
    image: '/assets/img/Gimli.webp',
    text: 'Gimli, son of Glóin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring. Unlike other Dwarves, he readily fought alongside Elves in the War of the Ring against Sauron at the end of the Third Age. After the defeat of Sauron, in the early Fourth Age, he was given the lordship over the Glittering Caves at Hel',
    link:'https://lotr.fandom.com/wiki/Gimli'
},
{
    name: 'Gandalf',
    image: '/assets/img/gandalf.jpeg',
    text: 'Gandalf the Grey, later known as Gandalf the White, and originally named Olórin (Quenya; IPA: [oˈloːrin]), was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin II Oakenshield and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.',
    link:'https://lotr.fandom.com/wiki/Gandalf'
},
{
    name: 'Frodo',
    image: '/assets/img/frodo.jpg',
    text: 'Frodo Baggins, son of Drogo Baggins, was a hobbit of the Shire in the late Third Age. He is commonly considered Tolkien',
    link:'https://lotr.fandom.com/wiki/Frodo_Baggins'
},
{
    name: 'Sauron',
    image: '/assets/img/sauron.jpg',
    text: 'Sauron (Quenya: IPA [ˈsaʊron] or [ˈθaʊron]), the eponymous Lord of the Rings, originally named Mairon, was the greatest subversive Maia, the maker of the One Ring, a gifted student of the Vala Aulë, and the most trusted lieutenant of Morgoth.',
    link:'https://lotr.fandom.com/wiki/Sauron'
},
]

var index = 0;

const buttonR = document.querySelector('.fa-arrow-right');
const buttonL = document.querySelector('.fa-arrow-left');

buttonR.addEventListener('click' , indexUp)
buttonL.addEventListener('click' , indexLower)

// change slide
function indexUp(){
    index++;
    showSlide(index);
}

function indexLower(){
    
    index--;
    showSlide(index);
}

function showSlide(i){
    index = i;
    if(i < 0){
        index = models.length -1;
    }
    if(i === models.length){
        index = 0;
    }
    document.querySelector('.card-title').innerHTML = (models[index].name);
    document.querySelector('.card-img-top').setAttribute('src', models[index].image );
    document.querySelector('.card-text').innerHTML = ( models[index].text );
    document.querySelector('.link').setAttribute('href', models[index].link );
}

