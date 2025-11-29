
export interface Movie {
    id: number;
    title: string;
    description: string;
    year: number;
    imageUrl: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        title: "Inception",
        description: "Rüyaların içinde geçen bir hırsızlık hikayesi. Dom Cobb (Leonardo DiCaprio) yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmaktır.",
        year: 2010,
        imageUrl: "https://tr.web.img4.acsta.net/pictures/bzp/01/143692.jpg",
    },
    {
        id: 2,
        title: "Interstellar",
        description: "İnsanlığın kurtuluşu için solucan deliğinden geçen bir grup kaşifin hikayesi. Dünyanın sonu gelirken, bir grup araştırmacı insanlık tarihinin en önemli görevini üstlenir.",
        year: 2014,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: "Joker'in kaosuna karşı Batman'in mücadelesi. Batman, Teğmen Jim Gordon ve Bölge Savcısı Harvey Dent ile suça karşı savaşını daha da ileri götürür.",
        year: 2008,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    },
    {
        id: 4,
        title: "Oppenheimer",
        description: "Atom bombasının babasının hayat hikayesi. J. Robert Oppenheimer'ın Manhattan Projesi sırasındaki rolüne ve sonrasındaki çalkantılı yıllara odaklanıyor.",
        year: 2023,
        imageUrl: "https://upload.wikimedia.org/wikipedia/tr/7/7f/Oppenheimer_%28film%29_afi%C5%9F.jpg",
    },
];

export function getMovies() {
    return movies;
}

export async function getMovieById(id: string) {
    const movie = movies.find((item) => item.id.toString() === id);
    return movie;
}