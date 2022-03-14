//add images value
var models = [
{
    name: 'Legolas',
    image: '/assets/img/legolas.jpg',
    text: 'Nay, time does not tarry ever, but change and growth is not in all things and places alike. For the Elves the world moves, and it moves both very swift and very slow.',
    link:'https://lotr.fandom.com/wiki/Legolas'
},
{
    name: 'Gimli',
    image: '/assets/img/Gimli.webp',
    text: 'Gimli, son of Glóin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring. ',
    link:'https://lotr.fandom.com/wiki/Gimli'
},
{
    name: 'Gandalf',
    image: '/assets/img/gandalf.jpeg',
    text: 'Gandalf the Grey, later known as Gandalf the White, and originally named Olórin (Quenya; IPA: [oˈloːrin]), was an Istar (Wizard),  .',
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
    text: 'Sauron (Quenya: IPA [ˈsaʊron] or [ˈθaʊron]), the eponymous Lord of the Rings, originally named Mairon, was the greatest subversive Maia.',
    link:'https://lotr.fandom.com/wiki/Sauron'
},
]

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '2000',
    random : false //true
}

init(settings);

const buttonR = document.querySelector('.fa-arrow-right');
const buttonL = document.querySelector('.fa-arrow-left');

buttonR.addEventListener('click' , indexUp)
buttonL.addEventListener('click' , indexLower)

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter' , function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave' , function(){
        init(settings);
    })
})

// oto slide
function init(settings){
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            //artan index
            if(slaytCount == index +1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}


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
        index = slaytCount -1;
    }
    if(i === slaytCount){
        index = 0;
    }
    document.querySelector('.card-title').innerHTML = (models[index].name);
    document.querySelector('.card-img-top').setAttribute('src', models[index].image );
    document.querySelector('.card-text').innerHTML = ( models[index].text );
    document.querySelector('.link').setAttribute('href', models[index].link );
}

