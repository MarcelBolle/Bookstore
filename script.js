//#region Render Books

renderBooks();

function showComments(commentsArray) {
  if (commentsArray.length === 0) {
    return '<p class="no-comments">Noch keine Kommentare vorhanden.</p>';
  }

  let html = "";
  for (
    let commentIndex = 0;
    commentIndex < commentsArray.length;
    commentIndex++
  ) {
    const comment = commentsArray[commentIndex];
    html += `<div class="comment-box">
                    <b>${comment.name}</b>: ${comment.comment}
                 </div>`;
  }
  return html;
}

function renderBooks() {
  let content = document.getElementById("books-container");
  content.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    const book = books[bookIndex];

    let heartIcon = book.liked ? "❤️" : "🤍";

    content.innerHTML += `
            <div class="book-card">
                <div class="book-image-wrapper">
                    <img src="${book.image}" alt="${book.name}">
                </div>
                
                <div class="book-info">
                    <h2>${book.name}</h2>
                    <p class="author">von ${book.author}</p>
                    <p class="genre-tag">${book.genre}</p>
                </div>    
                <div class="book-stats">
                    <p class="price">${book.price.toFixed(2)} €</p>
                    <div class="likes">
                        <button onclick="toggleHeart(${bookIndex})" class="heart_button">${heartIcon}</button> 
                        <span>${book.likes}</span>
                    </div>
                </div>

                <button onclick="toggleComments(${bookIndex})" class="comment-button">Kommentare</button>
                <div id="comments-${bookIndex}" class="comment-container d-none">
                     ${showComments(book.comments)}
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

function toggleComments(bookIndex) {
  let container = document.getElementById(`comments-${bookIndex}`);

  container.classList.toggle("d-none");
}
