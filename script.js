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
  5;
  let content = document.getElementById("books-container");
  content.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    const book = books[bookIndex];

    let heartIcon = book.liked ? "❤️" : "🤍";

    let commentClass = books[bookIndex].showComments ? "" : "d-none";

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

                <div class="add-comment">
                  <input type="text" id="input-${bookIndex}" placeholder="Dein Name...">
                  <textarea id="text-${bookIndex}" placeholder="Schreibe einen Kommentar..."></textarea>
                  <button class="add-comment-button" onclick="addComment(${bookIndex})">Posten</button>
                </div>

                <div id="comments-${bookIndex}" class="comment-container ${commentClass}">
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
  books[bookIndex].showComments = !books[bookIndex].showComments;
  renderBooks();
}

function addComment(bookIndex) {
  let nameInput = document.getElementById(`input-${bookIndex}`);
  let commentInput = document.getElementById(`text-${bookIndex}`);
  if (nameInput.value.trim() === "" || commentInput.value.trim() === "") {
    alert("Bitte füllen Sie sowohl den Namen als auch den Kommentar aus.");
    return;
  }
  let newComment = {
    name: nameInput.value,
    comment: commentInput.value,
  };

  books[bookIndex].comments.push(newComment);
  books[bookIndex].showComments = true;
  renderBooks();
}
