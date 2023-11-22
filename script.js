// function video() {



//     window.addEventListener("scroll", () => {
//         const scrollPosition = window.scrollY;
//         const scrollableContainer = document.querySelector(".scrollable-container");
//         const scrollableImage = document.querySelector(".scrollable-image");

//         if (scrollPosition >= 500) {
//             if (scrollableContainer.clientWidth !== 40) {
//                 scrollableContainer.style.width = "95%";
//                 scrollableImage.style.width = "130%";
//                 scrollableImage.style.height = "42vw";
//                 scrollableContainer.style.height = "42vw";
//                 scrollableImage.style.borderRadius = '300px';
//                 scrollableContainer.style.borderRadius = '300px';
//             }
//         } else {
//             if (scrollPosition <= 400) {
//                 if (scrollableContainer.clientWidth !== 80) {
//                     scrollableContainer.style.width = "40%";
//                     scrollableImage.style.width = "130%";
//                     scrollableImage.style.height = "22vw";
//                     scrollableContainer.style.height = "22vw";
//                     scrollableImage.style.borderRadius = '500px';
//                     scrollableContainer.style.borderRadius = '500px';
//                 }
//             }
//         }

//     });
// }
// function followImage() {
//     document.addEventListener('DOMContentLoaded', () => {
//         const imageContainer = document.querySelector('.follow-image-container');
//         const img = document.querySelector('.my-follow-image');
//         let isFollowingMouse = false;

//         // Function to handle scrolling
//         function handleScroll() {
//             const scrollY = window.scrollY;

//             if (scrollY >= 2250) {
//                 if (!isFollowingMouse) {
//                     isFollowingMouse = true;
//                     img.style.width = '30%';
//                     img.style.height = '60%';
//                     img.style.zIndex = '-1';
//                     img.style.borderRadius = '200px';
//                     img.classList.add("oncircle")
//                 }
//             } else {
//                 if (isFollowingMouse) {
//                     isFollowingMouse = false;
//                     // img.style.position = "relative"
//                     img.classList.remove("oncircle")
//                     img.style.width = '80%';
//                     img.style.height = '60%';
//                     img.style.borderRadius = '200px';
//                 }
//             }
//         }

//         // Function to handle mouse movement
//         function handleMouseMove(e) {
//             if (isFollowingMouse) {
//                 // const mouseX = e.clientX;
//                 // const mouseY = e.clientY;
//                 // const containerRect = imageContainer.getBoundingClientRect();
//                 // const containerX = containerRect.left + containerRect.width / 2;
//                 // const containerY = containerRect.top + containerRect.height / 2;
//                 // const translateX = mouseX - containerX;
//                 // const translateY = mouseY - containerY;
//                 var x = e.clientX;
//                 var y = e.clientY;
//                 img.style.left = x + 'px';
//                 img.style.top = y + 'px';
//                 // img.style.transform = `translate(${translateX}px, ${translateY}px)`;
//             }
//         }

//         // Function to handle scrolling end and return image to original location
//         let scrollTimeout;
//         function handleScrollEnd() {
//             clearTimeout(scrollTimeout);
//             scrollTimeout = setTimeout(() => {
//                 if (window.scrollY <= 2200) {
//                     img.style.transform = 'translate(0, 0)';
//                     // img.classlist.add("my-image")
//                     img.style.width = "80% !important"
//                     img.style.transition = "width 0.5s ease-in-out";

//                 }
//             }, 10); // Adjust the delay as needed
//         }
//         console.log(window.scrollYs)
//         // Event listeners
//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('scroll', handleScrollEnd);
//     });
// }


function mobileMenu() {
    var sechero = document.querySelector('.sechero');
    var mobmenu = document.querySelector('.mob-menu');
    var close = document.querySelector('.close');
    var burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {

        mobmenu.style.transform = "translateX(0)";
        sechero.style.display = "none";
    })
    close.addEventListener('click', () => {
        mobmenu.style.transform = "translateX(-430px)";
        sechero.style.display = "block";
    })

}

function onScroll() {
    let sections = document.querySelectorAll('.myouter');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 700;
            let height = sec.offsetHeight;
            if (top >= offset) {
                sec.classList.add('show-animate');
                offset = sec.offsetTop + 100;
            }

            // if want to use repeating animation on scroll, use this
            else {
                sec.classList.remove('show-animate');

            }

        })
    }
}






mobileMenu();
onScroll()