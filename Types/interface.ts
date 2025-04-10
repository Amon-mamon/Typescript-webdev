// interface BookTypes {
//     id:string;
//     title:string;
//     author:string;
//     isAvailable: boolean;
//     publishedYear:Date;
// }

// const books:BookTypes[] = [
//     {
//         id:"1",
//         title:"Harry Potter",
//         author:"Noah",
//         isAvailable:true,
//         publishedYear: new Date("2025-05-10")
//     },
//     {
//         id:"2",
//         title:"Harry Wotah",
//         author:"Nonah",
//         isAvailable:true,
//         publishedYear: new Date("2022-03-10")
//     },
//     {
//         id:"3",
//         title:"Harry Peter",
//         author:"Nanoah",
//         isAvailable:false,
//         publishedYear: new Date("2029-03-10")
//     },
// ]

// export function getAvailableBooks(books:BookTypes[]): BookTypes[]{
//     return books.filter((book) => book.isAvailable === true)
// }
// // console.log(getAvailableBooks(books))

// const newBook:BookTypes = {
//     id:"4",
//     title:"Harry Piper",
//     author:"Nani",
//     isAvailable:true,
//     publishedYear: new Date("2025-03-15")
// }
// export function addBook(addedBook:BookTypes):BookTypes[] {
//    books.push(addedBook)
//    return books
// }
// // console.log(addBook(newBook))

// export function markBookAsBorrowed(id:string){
//  const bookBorrowed = books.find((el) => el.id === id)
//  if(bookBorrowed){
//     bookBorrowed.isAvailable = false
//     return `Book ${bookBorrowed.title} has been marked as borrowed`
//  } else {
//     return `Book with ${id} has not been found`
//  }
    
// }
// // console.log(markBookAsBorrowed("1"))

// export function getBooksByAuthor(author:string){
//    return books.filter((el) => el.author === author)
// }
// // console.log(getBooksByAuthor('Noah'))

// export function getOldBooks(books:BookTypes[]){
//    const date = new Date()
//    return books.filter(publish =>{
//        return publish.publishedYear < date
//    })
// }
// // console.log(getOldBooks(books))

// export function getBookSortedByYear(books:BookTypes[]):BookTypes[]{
//     return books.slice().sort((a,b) => a.publishedYear.getTime() - b.publishedYear.getTime())
// }   
// console.log(getBookSortedByYear(books))


// exercise 2

// interface MovieTypes {
//     id:string;
//     title:string;
//     genre:string;
//     director:string;
//     releaseYear:number
//     watched:boolean
// }

// interface MovieCollection {
//     collectionName:string;
//     movies:MovieTypes[]
// }

// const myMovies: MovieCollection = {
//     collectionName:"My movie collection",
//     movies:[
//         { id: "1", title: "Inception", genre: "Sci-Fi", director: "Christopher Nolan", releaseYear: 2010, watched: true },
//         { id: "2", title: "The Dark Knight", genre: "Action", director: "Christopher Nolan", releaseYear: 2008, watched: false },
//         { id: "3", title: "The Matrix", genre: "Sci-Fi", director: "The Wachowskis", releaseYear: 1999, watched: true },
//         { id: "4", title: "Interstellar", genre: "Sci-Fi", director: "Christopher Nolan", releaseYear: 2014, watched: false }
//     ]
// }

// //adding movie

// export function addmovie (collection:MovieCollection, movie:MovieTypes) {
//    collection.movies.push(movie)
//    console.log(`Added movie ${movie.title}`)
// }


// //marked movie as watched

// export function markMovieAsWatched(collection:MovieCollection, movieId:string):string{
//     const markedMovie = collection.movies.find((el) =>el.id === movieId)
//     if(markedMovie){
//        markedMovie.watched === true
//        console.log(`Marked movie as watched: ${markedMovie.title}`) 
//        return `The movie ${markedMovie.title} has been marked as watched`
//     } else {
//         console.log(`Movie with ID ${movieId} not found`)
//         return `The movie with the ${movieId} is not found`
//     }
// }


// export function getWatchedMovies(collection:MovieCollection){
//     const watchedMovies = collection.movies.filter((el) => el.watched === true)
//     console.log(`Movies watched`, watchedMovies)
// }


// export function getMovieGenre(collection:MovieCollection, genre:string):MovieTypes[]{

//     const getGenre = collection.movies.filter((el) => el.genre === genre)
//     console.log(`Movies in the genre ${genre}:`, getGenre);
//     return getGenre
// }

// export function sortMoviesByYear(collection:MovieCollection){
//     const sortedMovies =  collection.movies.sort((a, b) => a.releaseYear - b.releaseYear)
//     console.log("Movies sorted by release year:", sortedMovies);
//     return sortedMovies
// }

// const newMovie: MovieTypes = { id: "5", title: "Tenet", genre: "Sci-Fi", director: "Christopher Nolan", releaseYear: 2020, watched: false };

// addmovie(myMovies,newMovie)
// markMovieAsWatched(myMovies, "2");
// getWatchedMovies(myMovies);
// getMovieGenre(myMovies, "Sci-Fi");
// sortMoviesByYear(myMovies)


