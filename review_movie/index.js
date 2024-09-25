
const API_KEY = 'api_key=d32dd5d20dbfe47004f3fbda6f628dff';
            const BASE_URL = 'https://api.themoviedb.org/3';
            const API_URL = BASE_URL + '/trending/movie/day?language=en-US&' + API_KEY;
            const IMG_URL = 'https://image.tmdb.org/t/p/w500';

            const main = document.getElementById("main");
            let currentPage = 1; 
            const pageSize = 10;
            let totalMoviesLoaded = 0; 
            let isLoading = false; 

            getMovies(API_URL + `&page=${currentPage}`);

        //    Lấy dữ liệu phim từ API
            function getMovies(url) {
                if (isLoading) return; 
                isLoading = true;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.results);
                        showMovies(data.results);
                        totalMoviesLoaded += data.results.length;
                        isLoading = false;
                    })
            }

            // Hiển thị phim lên trang
            function showMovies(data) {
                const moviesToShow = data.slice(0, pageSize);
                moviesToShow.forEach(movie => {
                    const { title, poster_path, vote_average, overview } = movie;
                    const movieEl = document.createElement('div');
                    movieEl.classList.add('movie');
                    movieEl.innerHTML = `
                        <img src="${IMG_URL + poster_path}" alt="${title}">
                        <div class="movie-info">
                            <h1>${title}</h1 >
                            <span class="${getColor(vote_average)}">${vote_average}</span>
                        </div>
                        <div class="overview">
                            <h1>Overview</h1>
                            ${overview}
                        </div>
                    `;
                    movieEl.addEventListener('click', () => {
                        // điều hướng trang
                        window.location.href = "success.html";
                    });

                    main.appendChild(movieEl);
                });
            }

            // đổi màu lượt đánh giá
            function getColor(vote) {
                if (vote >= 8) {
                    return 'green';
                } else if (vote >= 5) {
                    return 'yellow';
                } else {
                    return 'red';
                }
            }

            // tải thêm phim khi cuộn xuống 80% trang
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY + window.innerHeight;
                const threshold = document.documentElement.scrollHeight * 0.8; // 80% chiều cao trang

                if (scrollPosition >= threshold) {
                    currentPage++; // Tăng trang hiện tại
                    getMovies(API_URL + `&page=${currentPage}`);
                }
            });