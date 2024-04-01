document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display listings
    fetchAndDisplayListings();

    // Function to fetch and display listings
    function fetchAndDisplayListings() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var listings = JSON.parse(this.responseText);
                displayListings(listings);
            }
        };
        xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/pets.json", true);
        xhr.send();
    }

    // Function to fetch breeds
    function fetchBreeds(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var breeds = JSON.parse(this.responseText);
                callback(breeds);
            }
        };
        xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/breeds.json", true);
        xhr.send();
    }

    // Function to fetch cantons
    function fetchCantons(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var cantons = JSON.parse(this.responseText);
                callback(cantons);
            }
        };
        xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/caontons.json", true);
        xhr.send();
    }

    // Function to display listings
    function displayListings(listings) {
        fetchBreeds(function(breeds) {
            fetchCantons(function(cantons) {
                var container = document.getElementById('box-container');
                if (container === null) {
                    console.error("Element with ID 'box-container' not found.");
                    return;
                }
                container.innerHTML = ''; // Clear existing content

                // Loop through the listings
                listings.forEach(function(listing) {
                    var breed = breeds.breeds.find(function(b) {
                        return b.id === listing.type;
                    });
                    var category = breed ? breed.category : "Unknown";

                    var canton = cantons.find(function(c) {
                        return c.id === listing.location;
                    });
                    var locationName = canton ? canton.name : "Unknown";

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
                            <p class="type"><i class="fas fa-paw"></i><span>${category}</span></p>
                            <p class="location"><i class="fas fa-paw"></i><span>${locationName}</span></p>
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

            });
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

function fetchBreeds(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var breeds = JSON.parse(this.responseText);
            callback(breeds);
        }
    };
    xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/breeds.json", true); // Replace "path/to/breeds.json" with the actual path
    xhr.send();
}

function fetchCantons(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var cantons = JSON.parse(this.responseText);
            callback(cantons);
        }
    };
    xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/caontons.json", true); // Replace "path/to/cantons.json" with the actual path
    xhr.send();
}

function displayListings(listings) {
    fetchBreeds(function(breeds) {
        fetchCantons(function(cantons) {
            var container = document.getElementById('box-container-home');
            if (container === null) {
                console.error("Element with ID 'box-container' not found.");
                return;
            }
            container.innerHTML = ''; // Clear existing content

            // Loop through the listings
            for (var i = 0; i < 3; i++) {
                var listing = listings[i];
                var breed = breeds.breeds.find(function(b) {
                    return b.id === listing.type;
                });
                var category = breed ? breed.category : "Unknown";

                var canton = cantons.find(function(c) {
                    return c.id === listing.location;
                });
                var locationName = canton ? canton.name : "Unknown";

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
                        <p class="type"><i class="fas fa-paw"></i><span>${category}</span></p>
                        <p class="location"><i class="fas fa-paw"></i><span>${locationName}</span></p>
                        <div class="flex">
                            <p><i class="fas fa-calendar"></i><span>${listing.age}</span></p>
                            <p><i class="fas fa-money-bill"></i><span>${listing.price}</span></p>
                            <p><i class="fas fa-location-dot"></i><span>${listing.location}</span></p>
                        </div>
                        <a href="#view_pet" class="btn">View Pet</a>
                    </div>
                `;
                container.innerHTML += html;
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
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

function fetchBreeds(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var breeds = JSON.parse(this.responseText);
            callback(breeds);
        }
    };
    xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/breeds.json", true); // Replace "path/to/breeds.json" with the actual path
    xhr.send();
}

function fetchCantons(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var cantons = JSON.parse(this.responseText);
            callback(cantons);
        }
    };
    xhr.open("GET", "http://localhost:63342/Game-shop/desgin/Assets/js/caontons.json", true); // Replace "path/to/cantons.json" with the actual path
    xhr.send();
}

function displayListings(listings) {
    fetchBreeds(function(breeds) {
        fetchCantons(function(cantons) {
            var container = document.getElementById('box-container-home');
            if (container === null) {
                console.error("Element with ID 'box-container' not found.");
                return;
            }
            container.innerHTML = ''; // Clear existing content

            // Loop through the listings
            for (var i = 0; i < 3; i++) {
                var listing = listings[i];
                var breed = breeds.breeds.find(function(b) {
                    return b.id === listing.type;
                });
                var category = breed ? breed.category : "Unknown";

                var canton = cantons.find(function(c) {
                    return c.id === listing.location;
                });
                var locationName = canton ? canton.name : "Unknown";

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
                        <p class="type"><i class="fas fa-paw"></i><span>${category}</span></p>
                        <p class="location"><i class="fas fa-paw"></i><span>${locationName}</span></p>
                        <div class="flex">
                            <p><i class="fas fa-calendar"></i><span>${listing.age}</span></p>
                            <p><i class="fas fa-money-bill"></i><span>${listing.price}</span></p>
                            <p><i class="fas fa-location-dot"></i><span>${listing.location}</span></p>
                        </div>
                        <a href="#view_pet" class="btn">View Pet</a>
                    </div>
                `;
                container.innerHTML += html;
            }
        });
    });
}

