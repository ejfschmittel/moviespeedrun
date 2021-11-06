export const API_KEY = process.env.REACT_APP_TMDB_KEY;
export const BASE_API_URL = "https://api.themoviedb.org/3/"

export const config = {
    "images": {
        "base_url": "http://image.tmdb.org/t/p/",
        "secure_base_url": "https://image.tmdb.org/t/p/",
        "backdrop_sizes": [
            "w300",
            "w780",
            "w1280",
            "original"
        ],
        "logo_sizes": [
            "w45",
            "w92",
            "w154",
            "w185",
            "w300",
            "w500",
            "original"
        ],
        "poster_sizes": [
            "w92",
            "w154",
            "w185",
            "w342",
            "w500",
            "w780",
            "original"
        ],
        "profile_sizes": [
            "w45",
            "w185",
            "h632",
            "original"
        ],
        "still_sizes": [
            "w92",
            "w185",
            "w300",
            "original"
        ]
    },
    "change_keys": [
        "adult",
        "air_date",
        "also_known_as",
        "alternative_titles",
        "biography",
        "birthday",
        "budget",
        "cast",
        "certifications",
        "character_names",
        "created_by",
        "crew",
        "deathday",
        "episode",
        "episode_number",
        "episode_run_time",
        "freebase_id",
        "freebase_mid",
        "general",
        "genres",
        "guest_stars",
        "homepage",
        "images",
        "imdb_id",
        "languages",
        "name",
        "network",
        "origin_country",
        "original_name",
        "original_title",
        "overview",
        "parts",
        "place_of_birth",
        "plot_keywords",
        "production_code",
        "production_companies",
        "production_countries",
        "releases",
        "revenue",
        "runtime",
        "season",
        "season_number",
        "season_regular",
        "spoken_languages",
        "status",
        "tagline",
        "title",
        "translations",
        "tvdb_id",
        "tvrage_id",
        "type",
        "video",
        "videos"
    ]
}


export const IMAGE_SIZES = {
    BACKDROP: {
        W300: "w300",
        W780: "w780",
        W1280: "w1280",
        ORIGINAL: "original"
    },
    LOGO: {
        W45: "w45",
        W92: "w92",
        W154: "w154",
        W185: "w185",
        W300: "w300",
        W500: "w500",
        ORIGINAL: "original"
    },
    POSTER: {
        W92: "w92",
        W154: "w154",
        W185: "w185",
        W342: "w342",
        W500: "w500",
        W780: "w780",
        ORIGINAL: "original"
    },
    PROFILE: {
        W45: "w45",
        W185: "w185",
        H632: "H632",
        ORIGINAL: "original"
    } 
}
