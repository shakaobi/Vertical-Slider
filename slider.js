/**
 * Author Camesha Goods 
 * Date:August 14 2022
 * Description: This project uses CSS, HTML, and JavaScript
 * to create a simple program that uses slides and displays
 * pictues and information on opposite sides using arrows to
 * change. 
 */
const sliderContainer = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = rightSlide.querySelectorAll('div').length /*we are selecting all the dives in the right slide*/ 
/*calling all the classes*/ 


/*active slide index*/
let activeSlideIndex = 0
/*top value neg because index is zero based*/
leftSlide.style.top = `-${(slidesLength -1) * 100}vh`

/* functionality to the buttons for the page and picture match.*/
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction == 'up'){/*this will allow the right to up.*/
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }else if(direction == 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0 ) {
            activeSlideIndex = slidesLength - 1 /*slide indexies is 4*/
        }   
    }/*the else will aloow the left side to go down. 3 indexies*/

    /*translate on the Y axis*/
    rightSlide.style.transform = `translateY(-${activeSlideIndex *
        sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex *
        sliderHeight}px)`
    }/*translate on the Y axis to positive so it can go the opposite way together*/
