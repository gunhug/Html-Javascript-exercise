$(document).ready(function () {
    const API_KEY = 'api_key=d32dd5d20dbfe47004f3fbda6f628dff';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/trending/movie/day?language=en-US&' + API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    const $main = $("#main"); 
    let currentPage = 1;
    const pageSize = 10;
    let totalMoviesLoaded = 0;
    let isLoading = false;

    getMovies(API_URL + `&page=${currentPage}`);

    // Get movie data from API
    function getMovies(url) {
        if (isLoading) return;
        isLoading = true;

        $.getJSON(url, function (data) { // Make GET request
            console.log(data.results);
            showMovies(data.results);
            totalMoviesLoaded += data.results.length;
            isLoading = false;
        });
    }

    // Show movie on page
    function showMovies(data) {
        const moviesToShow = data.slice(0, pageSize);
        $.each(moviesToShow, function (index, movie) { // Loop through elements
            const { title, poster_path, vote_average, overview } = movie;
            const $movieEl = $(`
                <div class="movie">
                    <img src="${IMG_URL + poster_path}" alt="${title}">
                    <div class="movie-info">
                        <h1>${title}</h1>
                        <span class="${getColor(vote_average)}">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h1>Overview</h1>
                        ${overview}
                    </div>
                </div>
            `);

            // Add click event to navigate to another page
            $movieEl.on('click', function () {
                window.location.href = "success.html";
            });

            $main.append($movieEl); // Add element to main
        });
    }

    // Đổi màu dựa trên điểm đánh giá
    function getColor(vote) {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 5) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    // Change color based on rating
    $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop() + $(window).height();
        const threshold = $(document).height() * 0.8; // 80% page height

        if (scrollPosition >= threshold && !isLoading) {
            currentPage++; // Increase current page
            getMovies(API_URL + `&page=${currentPage}`);
        }
    });
});