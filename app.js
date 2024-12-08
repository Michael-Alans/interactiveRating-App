// button variables
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');


const mainContainer = document.getElementById('main-container');
const Message = document.getElementById('Message');
const submitButton = document.getElementById('submit');
const Rating = document.getElementById('rating');
const Back = document.getElementById('back');

//Event Listeners 
buttonOne.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'white'
    submitButton.style.color = 'black';


    submitButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        Message.style.display = 'block';

        Rating.innerText = `You selected ${buttonOne.innerText} out of ${buttonFive.innerText}` 
    })
    
});

buttonTwo.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'white'
    submitButton.style.color = 'black';


    submitButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        Message.style.display = 'block';

        Rating.innerText = `You selected ${buttonTwo.innerText} out of ${buttonFive.innerText}` 
    })
    
});

buttonThree.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'white'
    submitButton.style.color = 'black';


    submitButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        Message.style.display = 'block';

        Rating.innerText = `You selected ${buttonThree.innerText} out of ${buttonFive.innerText}` 
    })
    
});

buttonFour.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'white'
    submitButton.style.color = 'black';


    submitButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        Message.style.display = 'block';

        Rating.innerText = `You selected ${buttonFour.innerText} out of ${buttonFive.innerText}` 
    })
    
});

buttonFive.addEventListener('click', function() {
    submitButton.style.backgroundColor = 'white'
    submitButton.style.color = 'black';


    submitButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        Message.style.display = 'block';

        Rating.innerText = `You selected ${buttonFive.innerText} out of ${buttonFive.innerText}` 
    })
    
});

Back.addEventListener('click', function() {
    Message.style.display = 'none';
    mainContainer.style.display = 'block';
    submitButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
})