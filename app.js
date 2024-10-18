let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 8000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

    let likebtn = document.querySelector('#likebtn');
    let dislikebtn = document.querySelector('#dislikebtn');
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    
    let input3 = document.querySelector('#input3');
    let input4 = document.querySelector('#input4');
    
    
    likebtn.addEventListener('click', ()=>{
        input1.value = parseInt(input1.value) + 1;
        input1.style.color = "#00008B";
    })

    dislikebtn.addEventListener('click', ()=>{
        input2.value = parseInt(input2.value) + 1;
        input2.style.color = "#ff0000";
    })
    likebtn.addEventListener('click', ()=>{
        input3.value = parseInt(input3.value) + 1;
        input3.style.color = "#00008B";
    })

    dislikebtn.addEventListener('click', ()=>{
        input4.value = parseInt(input4.value) + 1;
        input4.style.color = "#ff0000";
    })