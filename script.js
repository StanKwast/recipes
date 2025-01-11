window.onload = function() {
    // Function to toggle the visibility of the recipe details
    function toggleRecipe(recipeName) {
        var recipeDetails = document.getElementById('details-' + recipeName);

        // Hide all other recipe details
        var allDetails = document.querySelectorAll('.recipe-details');
        allDetails.forEach(function(detail) {
            if (detail !== recipeDetails) {
                detail.style.display = "none";  // Close other recipe details
            }
        });

        // Toggle the visibility of the selected recipe's details
        if (recipeDetails.style.display === "none" || recipeDetails.style.display === "") {
            recipeDetails.style.display = "block";
        } else {
            recipeDetails.style.display = "none";
        }
    }

    // Function to filter recipes by category
    function filterRecipesByCategory(category) {
        var recipeItems = document.querySelectorAll('.recipe-item');
        var categoryLinks = document.querySelectorAll('nav a');

        // Reset active category
        categoryLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Filter and display recipes based on the selected category
        if (category === 'all') {
            document.getElementById('all-recipes').classList.add('active');
            recipeItems.forEach(function(item) {
                item.style.display = 'block';
            });
        } else {
            document.getElementById('category-' + category).classList.add('active');
            recipeItems.forEach(function(item) {
                var itemCategories = item.getAttribute('data-category').split(', ');
                if (itemCategories.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }

    // Function to filter recipes by search input
    function filterBySearch() {
        var searchValue = document.getElementById('search-bar').value.toLowerCase();
        var recipeItems = document.querySelectorAll('.recipe-item');

        recipeItems.forEach(function(item) {
            var recipeName = item.querySelector('h2').textContent.toLowerCase();
            if (recipeName.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Expose functions globally for use in HTML attributes
    window.toggleRecipe = toggleRecipe;
    window.filterRecipesByCategory = filterRecipesByCategory;
    window.filterBySearch = filterBySearch;
};
