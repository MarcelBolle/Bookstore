//#region Render Books

renderBooks();

function showComments(commentsArray) {
    let html = ''; 
    for (let commentIndex = 0; commentIndex < commentsArray.length; commentIndex++) {
        const comment = commentsArray[commentIndex];
        html += `<div class="comment-box">
                    <b>${comment.name}</b>: ${comment.comment}
                 </div>`;
    }
    return html;
}


function renderBooks() {
    let content = document.getElementById('books-container');
    content.innerHTML = '';

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const book = books[bookIndex];

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
                        <span class="likes"><button onclick="toggleHeart(${bookIndex})" class="heart_button">${heartIcon}</button> ${book.likes}</span>
                    </div>

                    <div class="comment-container">
                        <h3>Kommentare</h3>
                        ${showComments(book.comments)}
                    </div>
                </div>
            </div>
        `;
    }
}


//#endregion

function toggleHeart(bookIndex) {
    books[bookIndex].liked = !books[bookIndex].liked;
    if (books[bookIndex].liked) {
        books[bookIndex].likes++;
    } else {
        books[bookIndex].likes--;
    }
    renderBooks();
}