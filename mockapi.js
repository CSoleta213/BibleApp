import { books, verses } from './database/Tagab';

export function getCategoryName(book_name){
    let name;
    books.map(data => {
        if(data.name === book_name){
            name = data.name;
        }
    })
    return name;
}

// import { categories, recipes, ingredients } from './data';

// export function getCategoryName(categoryId){
//     let name;
//     categories.map(data => {
//         if(data.id === categoryId){
//             name = data.name;
//         }
//     })
//     return name;
// }