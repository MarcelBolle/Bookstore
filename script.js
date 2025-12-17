//#region Render Books

renderBooks();

function renderBooks() {
    let content = document.getElementById('books-container');
    content.innerHTML = '';

    for (let index = 0; index < books.length; index++) {
        const book = books[index];

        let heartIcon = book.liked ? '❤️' : '🤍';

        content.innerHTML += `
            <div class="book-card">
                <div class="book-image-wrapper">
                    <img src="${book.image}" alt="${book.name}">
                </div>
                
                <div class="book-info">
                    <h2>${book.name}</h2>
                    <p class="author">von ${book.author}</p>
                    <p class="genre-tag">${book.genre}</p>
                    
                    <div class="book-stats">
                        <span class="price">${book.price.toFixed(2)} €</span>
                        <span class="likes">${heartIcon} ${book.likes}</span>
                    </div>

                    <div class="comments-preview">
                        Kommentare: ${book.comments.length}
                    </div>
                </div>
            </div>
        `;
    }
}

//#endregion