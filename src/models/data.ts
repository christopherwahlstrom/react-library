// Typescript

export interface Book {
    title: string;
    author: string;
    imageUrl: string;
    bookId: number;
}

export interface User {
    name: string;
    borrowId: number; // String hade också funkat
    email: string;
}

export interface Borrow {
    borrowId: number;
    bookId: number;
}


// Jämfört med MongoDB : Book motsvarar ett dokument i en collection

// Todo 
// Interface för utlåning
// Interface flr användare