/*function loadJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

function populatePetDetails(petsData) {
    const petId = localStorage.getItem('viewPetId');
    console.log(petId);
    const petDetails = petsData.find(pet => pet.id === parseInt(petId));

    if (petDetails) {
        console.log(petDetails);
        // Example for populating the big image
        document.getElementById('big-image').src = `Assets/images/${petDetails.images[0]}`;

        // Populate small images
        const smallImagesContainer = document.getElementById('small-images');
        smallImagesContainer.innerHTML = ''; // Clear any existing images
        petDetails.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `Assets/images/${image}`;
            imgElement.classList.add('small-image'); // Optional: Add a class for styling
            imgElement.addEventListener('click', function() {
                document.getElementById('big-image').src = imgElement.src;
            });
            smallImagesContainer.appendChild(imgElement);
        });

        // Assuming petDetails contains all necessary info as per your JSON structure
        document.getElementById('pet-name').textContent = petDetails.name;

        // Update pet's location
        // This assumes you have a way to translate the location ID (e.g., 3) to a human-readable format
        // Since you've not specified how locations are handled, let's just use the location ID for now
        document.getElementById('pet-location').textContent = `Location ID: ${petDetails.location}`;
// Populate 'pet-info'
        const petInfo = document.getElementById('pet-info');
        petInfo.innerHTML = `
    <p><i class="fas fa-calendar"></i><span>${petDetails.age}</span></p>
    <p><i class="fas fa-money-bill"></i><span>${petDetails.price}</span></p>
    <p><i class="fas fa-location-dot"></i><span>${petDetails.location}</span></p>
    <p><i class="fas fa-user"></i><span>${petDetails.owner} (owner)</span></p>
    <p><i class="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
    <p><i class="fas fa-calendar"></i><span>${new Date(petDetails.time_of_posting).toLocaleDateString()}</span></p>
`;

// Populate 'pet-details-1'
        const petDetails1 = document.getElementById('pet-details-1');
        petDetails1.innerHTML = `
    <p><i>Name:</i><span>${petDetails.name}</span></p>
    <p><i>Age:</i><span>${petDetails.age} years</span></p>
    <p><i>Price:</i><span>${petDetails.price} euros</span></p>
    <p><i>Status:</i><span>For sale</span></p>
`;

// Populate 'pet-details-2'
        const petDetails2 = document.getElementById('pet-details-2');
        petDetails2.innerHTML = `
    <p><i>Vaccination:</i><span>${petDetails.vaccination}</span></p>
    <p><i>Documents:</i><span>${petDetails.documents}</span></p>
    <p><i>Personality:</i><span>${petDetails.personality}</span></p>
    <p><i>Special needs:</i><span>${petDetails.special_needs}</span></p>
`;

// Finally, populate the description
        document.getElementById('pet-description').textContent = petDetails.description;

    } else {
        console.log('Pet not found');
    }
}

setTimeout(() => {
    document.addEventListener('DOMContentLoaded', function() {
        loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/pets.json', function(response) {
            var petsData = JSON.parse(response);
            console.log(petsData);
            populatePetDetails(petsData);
        });
    });

}, 5000);

*/