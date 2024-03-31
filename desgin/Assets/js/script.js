/*document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    window.onload = function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var listings = JSON.parse(this.responseText);
                displayListings(listings);
            }
        };
        xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/pets.json", true);
        xhr.send();
    };

    function displayListings(listings) {
        var container = document.getElementById('box-container');
        if (container === null) {
            console.error("Element with ID 'box-container' not found.");
            return;
        }
        listings.forEach(function(listing) {
            var html = `
            <div class="box">
                <div class="admin">
                    <h3>${listing.owner}</h3>
                    <div>
                        <p>${listing.owner}</p>
                        <span>${listing.time_of_posting}</span>
                    </div>
                </div>
                <div class="thumb">
                    <p class="total-images"><i class="far fa-image"></i><span>${listing.images.length}</span></p>
                    <form action="" method="post" class="save">
                        <button type="submit" name="save" class="far fa-heart"></button>
                    </form>
                    <img src="Assets/images/${listing.images[0]}" alt="">
                </div>
                <h3 class="name">${listing.name}</h3>
                <p class="location"><i class="fas fa-paw"></i><span>${listing.description}</span></p>
                <div class="flex">
                    <p><i class="fas fa-calendar"></i><span>${listing.age}</span></p>
                    <p><i class="fas fa-money-bill"></i><span>${listing.price}</span></p>
                    <p><i class="fas fa-location-dot"></i><span>${listing.location}</span></p>
                </div>
                <a href="#view_pet" class="btn">View Pet</a>
            </div>
            `;
            container.innerHTML += html;
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    fetchAndDisplayListings();
});

function fetchAndDisplayListings() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var listings = JSON.parse(this.responseText);
            var firstThreeListings = listings.slice(0, 3); // Extracting the first three listings
            displayListings(firstThreeListings);
        }
    };
    xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/pets.json", true);
    xhr.send();
}

function displayListings(listings) {
    var container = document.getElementById('box-container-home');
    if (container === null) {
        console.error("Element with ID 'box-container' not found.");
        return;
    }
    container.innerHTML = ''; // Clear existing content

    // Loop through the listings
    for (var i = 0; i < 3; i++) {
        var listing = listings[i];
        var html = `
            <div class="box">
                <div class="admin">
                    <h3>${listing.owner}</h3>
                    <div>
                        <p>${listing.owner}</p>
                        <span>${listing.time_of_posting}</span>
                    </div>
                </div>
                <div class="thumb">
                    <p class="total-images"><i class="far fa-image"></i><span>${listing.images.length}</span></p>
                    <form action="" method="post" class="save">
                        <button type="submit" name="save" class="far fa-heart"></button>
                    </form>
                    <img src="Assets/images/${listing.images[0]}" alt="">
                </div>
                <h3 class="name">${listing.name}</h3>
                <p class="location"><i class="fas fa-paw"></i><span>${listing.description}</span></p>
                <div class="flex">
                    <p><i class="fas fa-calendar"></i><span>${listing.age}</span></p>
                    <p><i class="fas fa-money-bill"></i><span>${listing.price}</span></p>
                    <p><i class="fas fa-location-dot"></i><span>${listing.location}</span></p>
                </div>
                <a href="#view_pet" class="btn">View Pet</a>
            </div>
        `;
        container.innerHTML += html;
    }}
*/


