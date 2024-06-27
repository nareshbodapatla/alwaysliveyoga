document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var viewMoreBtn = document.getElementById('view-more-btn');
    var moreContent = document.getElementById('more-content');

    viewMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            viewMoreBtn.textContent = "View Less";
        } else {
            moreContent.style.display = "none";
            viewMoreBtn.textContent = "View More";
        }
    });
});


let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

document.querySelector(".next").addEventListener("click", () => {
  changeTestimonial(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeTestimonial(-1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showTestimonial(index);
  });
});

function changeTestimonial(direction) {
  testimonials[currentIndex].style.display = "none";
  dots[currentIndex].classList.remove("active");
  currentIndex =
    (currentIndex + direction + testimonials.length) % testimonials.length;
  testimonials[currentIndex].style.display = "flex";
  dots[currentIndex].classList.add("active");
}

function showTestimonial(index) {
  testimonials[currentIndex].style.display = "none";
  dots[currentIndex].classList.remove("active");
  currentIndex = index;
  testimonials[currentIndex].style.display = "flex";
  dots[currentIndex].classList.add("active");
}

function init() {
  testimonials.forEach((testimonial, index) => {
    if (index !== currentIndex) {
      testimonial.style.display = "none";
    }
  });
  dots[currentIndex].classList.add("active");
}

init();

let index = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-index * 100}%)`;
  });
}

document.querySelector(".slide-prev").addEventListener("click", () => {
  index--;
  showSlide(index);
});

document.querySelector(".slide-next").addEventListener("click", () => {
  index++;
  showSlide(index);
});

showSlide(index);

