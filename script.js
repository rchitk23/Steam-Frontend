

function performSearch() {
    const query = document.getElementById('search-input').value;
    if(query) {
        alert('You searched for: ' + query);
    } else {
        alert('Please enter a search term');
    }
}


// moving card

let cards = document.querySelectorAll('.card');
let cardArray = Array.from(cards);
let currentIndex = 0;

function updateCards() {
    cardArray.forEach((card, index) => {
        card.classList.remove('active', 'left', 'left-2', 'right', 'right-2');

        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cardArray.length) {
            card.classList.add('right-2');
        } else if (index === (currentIndex + 2) % cardArray.length) {
            card.classList.add('right');
        } else if (index === (currentIndex - 1 + cardArray.length) % cardArray.length) {
            card.classList.add('left-2');
        } else if (index === (currentIndex - 2 + cardArray.length) % cardArray.length) {
            card.classList.add('left');
        }
    });
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + cardArray.length) % cardArray.length;
    updateCards();
}

function moveRight() {
    currentIndex = (currentIndex + 1) % cardArray.length;
    updateCards();
}

updateCards();





// secon-page script

document.addEventListener("DOMContentLoaded", () => {
    const smallCards = document.querySelectorAll(".cardslider");
    const bigCard = document.getElementById("bigCard");
    const bigCardImage = document.getElementById("bigCardImage");
    const bigCardName = document.getElementById("bigCardName");
    const bigCardDescription = document.getElementById("bigCardDescription");
    const bigCardPrice = document.getElementById("bigCardPrice");

    let currentCardIndex = 0;
    let intervalId = null;

    // Set initial content
    updateBigCardContent(smallCards[0]);

    smallCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            clearInterval(intervalId);
            currentCardIndex = index;
            showNextCard();
            intervalId = setInterval(() => {
                currentCardIndex = (currentCardIndex + 1) % smallCards.length;
                showNextCard();
            }, 3000);
        });
    });

    function showNextCard() {
        smallCards.forEach(c => c.classList.remove("clicked", "animate"));
        smallCards[currentCardIndex].classList.add("clicked", "animate");

        const rect = smallCards[currentCardIndex].getBoundingClientRect();
        const containerRect = document.querySelector(".slider-contanier").getBoundingClientRect();

        bigCard.style.transition = 'none';
        bigCard.style.width = `${rect.width}px`;
        bigCard.style.height = `${rect.height}px`;
        bigCard.style.right = `${containerRect.width - rect.left - rect.width}px`;

        setTimeout(() => {
            bigCard.style.transition = 'all 0.5s';
            bigCard.style.width = '850px';
            bigCard.style.height = '440px';
            bigCard.style.top = '48%';
            bigCard.style.right = '30%';
            updateBigCardContent(smallCards[currentCardIndex]);
        }, 10);

        setTimeout(() => {
            smallCards.forEach(c => c.classList.remove("animate"));
            smallCards[currentCardIndex].classList.add("animate");
        }, 10); // Add animate class to the current card
    }

    function updateBigCardContent(card) {
        bigCardImage.src = card.querySelector("img").src;
        bigCardName.textContent = card.getAttribute("data-name");
        // bigCardDescription.textContent = card.getAttribute("data-description");
        bigCardPrice.textContent = card.getAttribute("data-price");
    }

    intervalId = setInterval(() => {
        currentCardIndex = (currentCardIndex + 1) % smallCards.length;
        showNextCard();
    }, 3000); // Start the slideshow
});





// top sellers sections


document.addEventListener("DOMContentLoaded", function() {
    const games = [
        {
            "game-1": {
                "image": "https://imgs.search.brave.com/hZRjaaLE-RzP4B19qAQeTiu0P3lscfvl077bcklgtQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzL3NoYXJl/ZGltYWdlcy8yMDI0/LzA0L2d0YS01LWNv/dmVyLmpwZw",
                "price": 0,
            },
            "game-2": {
                "image": "https://imgs.search.brave.com/F_RCTEzliAcx_9eBR5LuooDY7xh_CLEYVKhKUY6Zho4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDkv/cmVkLWRlYWQtcmVk/ZW1wdGlvbi0yLXBv/c3Rlci5qcGc",
                "price": 0,
            },
            "game-3": {
                "image": "https://imgs.search.brave.com/KGJMIP5h3tLlWzjZeTF5Yyb-Rup1vE_iX9ymccRlXWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDkv/bGFzdC1vZi11cy0y/LWJveC1hcnQuanBn",
                "price": 0,
            },
            "game-4": {
                "image": "https://imgs.search.brave.com/CthWIARErjzU4PNCS0RUztVNBuW9ru-Nr6xgHg8EhZI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmtp/bmphLWltZy5jb20v/aW1hZ2UvdXBsb2Fk/L2NfZml0LHFfNjAs/d182NDUvNzQyZmEw/Yjc3ZDI0NmZiYWY1/MTc2OTFkMGIyOTNj/NTYuanBn",
                "price": 0,
            },
            "game-5": {
                "image": "https://imgs.search.brave.com/VqKd11Wd3cmT8kE2e9XdTeW6DC7DQyjYrJbxhhdzCjE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ob3ds/b25ndG9iZWF0LmNv/bS9nYW1lcy84MDAz/OF9SZXNpZGVudF9F/dmlsX1ZpbGxhZ2Uu/anBnP3dpZHRoPTc2/MA",
                "price": 0,
            }
        },
        {
            "game-1": {
                "image": "https://imgs.search.brave.com/_5uSZcblLe9DIienPwIdOUxlkxb03ROfajBwf3sYMsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMzAw/NTE4LmpwZw",
                "price": 0,
            },
            "game-2": {
                "image": "https://imgs.search.brave.com/KPqpCpYuMCpiYKundpM4P3LyABLIQXNDkdy8Flo9wik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzM1LzY0LzYz/LzM2MF9GXzczNTY0/NjM2MF9UMXhWOUoz/YWhENGgwNnI0SElE/QkdJSG84bGh4WDJ6/Mi5qcGc",
                "price": 0,
            },
            "game-3": {
                "image": "https://imgs.search.brave.com/b82CP0kH8eg0JMI3_28aApqmk1xHa70e3B8dEy5Y3QM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VkL2I2/LzYxL2VkYjY2MWFj/YmY4OTI5NjNjOGY3/YjNjMzA1YzQ4ZTQx/LmpwZw",
                "price": 0,
            },
            "game-4": {
                "image": "https://imgs.search.brave.com/Xg5WkhiH79EyHhG5YUet37BuCfxgAlCmyZwDYhW-1HM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW1vbmctdXMt/Y2IyMWxkdWUzbGxj/ZWl1YS5qcGc",
                "price": 0,
            },
            "game-5": {
                "image": "https://imgs.search.brave.com/v2zBj7c-op2_Rj9zH0T9OoM0BONhhfzywPzAd0mJtyQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEa3hNakV4/WmpndFlXUXdNaTAw/T0dZeExUZ3dabU10/TVdZMk1XVTBaVEJr/TkdNMFhrRXlYa0Zx/Y0dkZVFYVnlOVGd5/TlRBNE1qTUAuanBn",
                "price": 0,
            }
        }
    ];

    const image_1 = document.getElementById("image-1");
    const image_2 = document.getElementById("image-2");
    const image_3 = document.getElementById("image-3");
    const image_4 = document.getElementById("image-4");
    const image_5 = document.getElementById("image-5");
    
    const next = document.getElementById("next-arrow");
    const previous = document.getElementById("previous-arrow");

    let currentIndex = 0;

    next.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % games.length;

        image_1.src = games[currentIndex]["game-1"].image;
        image_2.src = games[currentIndex]["game-2"].image;
        image_3.src = games[currentIndex]["game-3"].image;
        image_4.src = games[currentIndex]["game-4"].image;
        image_5.src = games[currentIndex]["game-5"].image;
    });
    
    previous.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + games.length) % games.length;
        
        image_1.src = games[currentIndex]["game-1"].image;
        image_2.src = games[currentIndex]["game-2"].image;
        image_3.src = games[currentIndex]["game-3"].image;
        image_4.src = games[currentIndex]["game-4"].image;
        image_5.src = games[currentIndex]["game-5"].image;
    });
});
