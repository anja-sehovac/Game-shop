/*
    // Function to make AJAX request
    function loadJSON(url, callback) {
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


    document.addEventListener("DOMContentLoaded", function() {
        // Select the My Listings button
        var myListingsButton = document.querySelector('a[href="#my_listings"]');

        // Add onclick event listener
        myListingsButton.addEventListener("click", function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            window.location.href = "#my_listings";




            setTimeout(() => {
            loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/pets.json', function (response) {
                var petsData = JSON.parse(response);
                console.log("Saved button clicked!");

                loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/breeds.json', function (breedResponse) {
                    var breedsData = JSON.parse(breedResponse);

                    loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/caontons.json', function (cantonsResponse) {
                        var cantonsData = JSON.parse(cantonsResponse);

                        loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/users.json', function (ownersResponse) {
                            var ownersData = JSON.parse(ownersResponse);
                            console.log("Owners Data:", ownersData);

                            const boxContainerHome = document.getElementById('box-container-home');
                            const userId = localStorage.getItem('userId');
                            // Loop through the first three pets and create box elements
                            petsData.forEach(function (pet) {
                                if (pet.owner == parseInt(userId)) {
                                    console.log("Pet Owner ID:", pet.owner);
                                    const box = document.createElement('div');
                                    box.classList.add('box');

                                    // Admin info
                                    const admin = document.createElement('div');
                                    admin.classList.add('admin');

                                    const owner = ownersData.find(owner => owner.id === pet.owner);

                                    if (owner) {
                                        const ownerLabel = document.createElement('h4');
                                        ownerLabel.textContent = "Owner: ";
                                        admin.appendChild(ownerLabel);

                                        const ownerName = document.createElement('h5');
                                        ownerName.textContent = owner.name;
                                        admin.appendChild(ownerName);
                                    } else {
                                        console.log('Owner not found');
                                    }


                                    box.appendChild(admin);

                                    // Thumbnail and image
                                    const thumb = document.createElement('div');
                                    thumb.classList.add('thumb');

                                    const totalImages = document.createElement('p');
                                    totalImages.classList.add('total-images');
                                    totalImages.innerHTML = `<i class="far fa-image"></i><span>${pet.images.length}</span>`;
                                    thumb.appendChild(totalImages);

                                    const img = document.createElement('img');
                                    img.src = `Assets/images/${pet.images[0]}`;
                                    img.alt = pet.name;
                                    thumb.appendChild(img);

                                    box.appendChild(thumb);

                                    // Pet info
                                    const petName = document.createElement('h3');
                                    petName.classList.add('name');
                                    petName.textContent = pet.name;
                                    box.appendChild(petName);

                                    const category = document.createElement('p');
                                    category.classList.add('type');
                                    const petCategory = breedsData.breeds.find(breed => breed.id === pet.type);
                                    category.innerHTML = `<i class="fas fa-paw"></i><span>${petCategory ? petCategory.category : 'Unknown'}</span>`;
                                    box.appendChild(category);

                                    const locationName = document.createElement('p');
                                    locationName.classList.add('location');
                                    const petLocation = cantonsData.find(canton => canton.id === pet.location);
                                    locationName.innerHTML = `<i class="fas fa-paw"></i><span>${petLocation ? petLocation.name : 'Unknown'}</span>`;
                                    box.appendChild(locationName);

                                    const detailsFlex = document.createElement('div');
                                    detailsFlex.classList.add('flex');

                                    const age = document.createElement('p');
                                    age.innerHTML = `<i class="fas fa-calendar"></i><span>${pet.age} years</span>`;
                                    detailsFlex.appendChild(age);

                                    const price = document.createElement('p');
                                    price.innerHTML = `<i class="fas fa-money-bill"></i><span>$${pet.price}</span>`;
                                    detailsFlex.appendChild(price);

                                    const location = document.createElement('p');
                                    location.innerHTML = `<i class="fas fa-location-dot"></i><span>${pet.location}</span>`;
                                    detailsFlex.appendChild(location);

                                    box.appendChild(detailsFlex);

                                    const editBtn = document.createElement('a');
                                    editBtn.href = '#edit_pet';
                                    editBtn.classList.add('btn');
                                    editBtn.textContent = 'Edit';
                                    box.appendChild(editBtn);
                                    editBtn.addEventListener('click', function () {
                                        localStorage.setItem('viewPetId', pet.id.toString());
                                        // Optionally, navigate to the pet detail page if it's a different HTML file
                                        // window.location.href = 'path_to_pet_detail_page.html';
                                    });

                                    const deleteBtn = document.createElement('a');
                                    deleteBtn.href = '';
                                    deleteBtn.classList.add('btn');
                                    deleteBtn.textContent = 'Delete';
                                    box.appendChild(deleteBtn);


                                    //Button helper functions
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
                                    function petInfo(){
                                        loadJSON('http://localhost:63342/Game-shop/desgin/Assets/js/pets.json', function(response) {
                                            var petsData = JSON.parse(response);
                                            console.log(petsData);
                                            populatePetDetails(petsData);
                                        });
                                    }


                                    const viewBtn = document.createElement('a');
                                    viewBtn.href = '#view_pet';
                                    viewBtn.classList.add('btn');
                                    viewBtn.textContent = 'View Pet';
                                    box.appendChild(viewBtn);
                                    viewBtn.addEventListener('click', function () {
                                        localStorage.setItem('viewPetId', pet.id.toString());
                                        // Optionally, navigate to the pet detail page if it's a different HTML file
                                        // window.location.href = 'path_to_pet_detail_page.html';
                                        petInfo();
                                    });

                                    boxContainerHome.appendChild(box);
                                }
                            });
                        });
                    });
                });
            });
            }, 50);
        });
    });*/