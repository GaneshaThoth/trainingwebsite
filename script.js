// Get the year element

const yearElement = document.getElementById("year");


// Display the current year

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Get all training links

const trainingLinks = document.querySelectorAll(".training-link");


// Add click event to each training link

trainingLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        alert("This training course is coming soon!");

    });

});
