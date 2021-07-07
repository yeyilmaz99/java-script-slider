let models =[
    {
        name : 'car-1',
        image : 'img/1.jpg',
        text : 'this is car-1',
        link : 'https://www.twitter.com/',
    },
    {
        name : 'car-2',
        image : 'img/2.jpg',
        text : 'this is car-2',
        link : 'https://www.facebook.com/',
    },
    {
        name : 'car-3',
        image : 'img/3.jpg',
        text : 'this is car-3',
        link : 'https://www.youtube.com/',
    },
    {
        name : 'car-4',
        image : 'img/4.jpg',
        text : 'this is car-4',
        link : 'https://www.google.com/',
    }
]

let index = 0;
let slideCount = models.length;
let settings = {
    duration : '1500',
    random : false
}
let interval;

init(settings);

function init(settings){

    let prev;
    interval= setInterval(function (){
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slideCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}



showSlide(index);

function showSlide(i){
    index = i;
    if(i<0){
        index = slideCount - 1;
    }
    if(i>= slideCount){
        index = 0;
    }
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-text').textContent = models[index].text;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

document.querySelectorAll('.arrow').forEach(function (item){
    item.addEventListener('mouseenter', function (){
        clearInterval(interval);
    } )
})
document.querySelectorAll('.arrow').forEach(function (item){
    item.addEventListener('mouseleave', function (){
        init(settings);
    } )
})


let leftArrow = document.querySelector('.fa-arrow-left');
let rightArrow = document.querySelector('.fa-arrow-right');
rightArrow.addEventListener('click', moveToNextOne);
leftArrow.addEventListener('click', moveToPreviousOne);


function moveToNextOne(){
    index++;
    showSlide(index);
    console.log(index)

}

function moveToPreviousOne(){
    index--;
    showSlide(index);
    console.log(index)
}

