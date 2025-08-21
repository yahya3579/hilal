// Categories configuration for different magazine types
export const magazineCategories = {
    // Home/English categories (default)
    home: {
        label: "Category",
        categories: [
            {
                name: "in-focus",
                displayName: "In-Focus",
                path: "/category/in-focus"
            },
            {
                name: "war-on-terror",
                displayName: "War on Terror",
                path: "/category/war-on-terror"
            },
            {
                name: "special-reports",
                displayName: "Special Reports",
                path: "/category/special-reports"
            },
            {
                name: "national-international-news",
                displayName: "National Internation News",
                path: "/category/national-international-news"
            },
            {
                name: "armed-forces-news",
                displayName: "Armed Forces News",
                path: "/category/armed-forces-news"
            },
            {
                name: "misc",
                displayName: "Misc",
                path: "/category/misc"
            },

        ]
    },

    // Hilal Urdu categories
    "hilal-urdu": {
        label: "Category",
        categories: [
            {
                name: "in-focus-urdu",
                displayName: "قومی و بین الاقوامی",
                path: "/category/in-focus-urdu"
            },
            {
                name: "trending-urdu",
                displayName: "ہلال اردو",
                path: "/category/trending-urdu"
            },
            {
                name: "national-international-news-urdu",
                displayName: "مرکزی موضوع",
                path: "/category/national-international-news-urdu"
            },
            // {
            //     name: "armed-forces-news-urdu",
            //     displayName: "Armed Forces News-Urdu",
            //     path: "/category/armed-forces-news-urdu"
            // }
        ]
    },

    // Hilal Urdu Kids categories
    "hilal-urdu-kids": {
        label: "Category",
        categories: [
            {
                name: "in-focus-urdu-kids",
                displayName: "مرکزی موضوع",
                path: "/category/in-focus-urdu-kids"
            },
            {
                name: "trending-urdu-kids",
                displayName: "ہلال اردو",
                path: "/category/trending-urdu-kids"
            },
            {
                name: "national-international-news-urdu-kids",
                displayName: "قومی و بین الاقوامی",
                path: "/category/national-international-news-urdu-kids"
            }
        ]
    },

    // Hilal Kids English categories
    "hilal-kids": {
        label: "Category",
        categories: [
            {
                name: "hilal-kids-english",
                displayName: "Hilal Kids",
                path: "/category/hilal-kids-english"
            },
            {
                name: "in-focus-kids",
                displayName: "In-Focus",
                path: "/category/in-focus-kids"
            },
            {
                name: "trending-kids",
                displayName: "Trending",
                path: "/category/trending-kids"
            }
        ]
    },

    // Hilal Her categories
    "hilal-her": {
        label: "Category",
        categories: [

            {
                name: "hilal-her",
                displayName: "Hilal Her",
                path: "/category/hilal-her"
            },
            {
                name: "in-focus-her",
                displayName: "In-Focus Her",
                path: "/category/in-focus-her"
            },
            {
                name: "trending1-her",
                displayName: "Trending-Her",
                path: "/category/trending1-her"
            },

        ]
    }
};

// Global variable to track the last magazine page visited
let lastMagazinePage = 'home';

// Helper function to get categories based on current path
export const getCategoriesForPath = (pathname) => {
    // Check if current path is a magazine page
    if (pathname === "/") {
        lastMagazinePage = 'home';
        return magazineCategories["home"];
    } else if (pathname === "/hilal-urdu") {
        lastMagazinePage = 'hilal-urdu';
        return magazineCategories["hilal-urdu"];
    } else if (pathname === "/hilal-urdu-kids") {
        lastMagazinePage = 'hilal-urdu-kids';
        return magazineCategories["hilal-urdu-kids"];
    } else if (pathname === "/hilal-kids") {
        lastMagazinePage = 'hilal-kids';
        return magazineCategories["hilal-kids"];
    } else if (pathname === "/hilal-her") {
        lastMagazinePage = 'hilal-her';
        return magazineCategories["hilal-her"];
    }

    // For all other routes (about, contact, articles, archives, ebooks, etc.)
    // return categories from the last magazine page visited
    return magazineCategories[lastMagazinePage];
};
