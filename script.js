/*Slideshow*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

// Image Gallery
document.querySelector('.book1').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book1').classList.add('selected')
})

document.querySelector('.book2').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book2').classList.add('selected')
})

document.querySelector('.book3').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book3').classList.add('selected')
})

document.querySelector('.book4').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book4').classList.add('selected')
})

document.querySelector('.book5').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book5').classList.add('selected')
})

document.querySelector('.book6').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book6').classList.add('selected')
})

document.querySelector('.book7').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book7').classList.add('selected')
})

document.querySelector('.book8').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book8').classList.add('selected')
})

document.querySelector('.book9').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book9').classList.add('selected')
})

document.querySelector('.book10').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book10').classList.add('selected')
})

document.querySelector('.book11').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book11').classList.add('selected')
})

document.querySelector('.book12').addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.book12').classList.add('selected')
})

// Hide text
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('.hidden').classList.remove('hidden')
})
