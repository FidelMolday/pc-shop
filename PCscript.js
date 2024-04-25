let imgs = document.querySelectorAll(".slider ul img");
let prev_btn = document.querySelector(".prev");
let next_btn = document.querySelector(".next");
let scrollLeftButton1 = document.querySelector("#l1");
let scrollRightButton1 = document.querySelector("#r1");
let row1 = document.querySelector("#new");
let scrollLeftButton2 = document.querySelector("#l2");
let scrollRightButton2 = document.querySelector("#r2");
let row2 = document.querySelector("#top");
let scrollLeftButton3 = document.querySelector("#l3");
let scrollRightButton3 = document.querySelector("#r3");
let row3 = document.querySelector("#deal");
let sections = document.querySelectorAll(".picks");

let n =0;

function slide(){
    for (let i = 0;i<imgs.length;i++){
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}

slide();

prev_btn.addEventListener("click",(e)=>{
    if (n>0){
        n--;
    }
    else{
        n = imgs.length-1;
    }
    slide();
});

next_btn.addEventListener("click",(e)=>{
    if (n<imgs.length-1){
        n++;
    }
    else{
        n = 0;
    }
    slide();
});

setInterval((e)=>{
    if (n<imgs.length-1){
        n++;
    }
    else{
        n = 0;
    }
    slide();
},5000);

const scrollAmount = 1000; // Adjust scroll amount as desired

let isScrolling = false; // Flag to prevent multiple scrolls

function smoothScroll(direction, amount, row, scrollLeftButton, scrollRightButton) {
  let startPosition = row.scrollLeft;
  let endPosition = startPosition + (direction === "left" ? -amount : amount);
  let startTime = Date.now();

  const animation = () => {
    let timeElapsed = Date.now() - startTime;
    let progress = timeElapsed / 500; // Adjust duration as needed

    row.scrollLeft = startPosition + (endPosition - startPosition) * progress;

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      isScrolling = false;
      // Check scroll position and update button visibility
      scrollLeftButton.style.display = row.scrollLeft === 0 ? "none" : "inline-block";
      scrollRightButton.style.display = row.scrollLeft + row.offsetWidth === row.scrollWidth ? "none" : "inline-block";
    }
  };

  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(animation);
  }
}

scrollLeftButton1.addEventListener("click", () => {
    smoothScroll("left", scrollAmount, row1, scrollLeftButton1,scrollRightButton1);
});

scrollRightButton1.addEventListener("click", () => {
    smoothScroll("right", scrollAmount, row1, scrollLeftButton1, scrollRightButton1);
});

scrollLeftButton2.addEventListener("click", () => {
    smoothScroll("left", scrollAmount, row2, scrollLeftButton2,scrollRightButton2);
});
  
scrollRightButton2.addEventListener("click", () => {
    smoothScroll("right", scrollAmount, row2, scrollLeftButton2, scrollRightButton2);
});

scrollLeftButton3.addEventListener("click", () => {
    smoothScroll("left", scrollAmount, row3, scrollLeftButton3,scrollRightButton3);
});
  
scrollRightButton3.addEventListener("click", () => {
    smoothScroll("right", scrollAmount, row3, scrollLeftButton3, scrollRightButton3);
});

function updateButtonVisibility(section) {
    const row = section.querySelector(".row");
    const scrollLeftButton = section.querySelector(".scrollLeft");
    const scrollRightButton = section.querySelector(".scrollRight");
  
    scrollLeftButton.style.display = row.scrollLeft === 0 ? "none" : "inline-block";
    scrollRightButton.style.display = row.scrollLeft + row.offsetWidth === row.scrollWidth ? "none" : "inline-block";
  }
  
  sections.forEach(section => {
    updateButtonVisibility(section); // Call the function for each section on load
  });
  
  window.addEventListener("scroll", () => {
    sections.forEach(section => updateButtonVisibility(section)); // Update button visibility on scroll
  });

const menu = document.querySelector('.menu');
const dropdownContent = document.querySelector('.dropdown-content');
const overlay = document.querySelector('.overlay');
  
menu.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
    overlay.classList.toggle('active');
});
  
document.addEventListener('click', (event) => {
    if (!event.target.matches('.menu') && !event.target.closest('.dropdown-content')) {
        dropdownContent.classList.remove('show');
        overlay.classList.remove('active');
}
});
  