// books.js

document.addEventListener('DOMContentLoaded', async function () {
  await getBooksRequest();

  const saveBookButton = document.getElementById('saveBookButton');
  saveBookButton.addEventListener('click', async function () {
    const bookName = document.getElementById('name').value;
    const bookAuthor = document.getElementById('author').value;
    const bookGenre = document.getElementById('genre').value;
    await saveBookRequest({ bookName, bookAuthor, bookGenre });
    hideModal('createBook');
    await getBooksRequest();
  });

  const updateBookButton = document.getElementById('updateBookButton');
  updateBookButton.addEventListener('click', async function () {
    const bookID = document.getElementById('editBookID').innerHTML;
    const bookName = document.getElementById('editBookTitle').value;
    const bookAuthor = document.getElementById('editBookAuthor').value;
    const bookGenre = document.getElementById('editBookGenre').value;
    await updateBookRequest({ bookID, bookName, bookGenre, bookAuthor });
    hideModal('editBookModal');
    await getBooksRequest();
  });

  const deleteBookButton = document.getElementById('deleteBookButton');
  deleteBookButton.addEventListener('click', async function () {
    const bookId = document.getElementById('deleteBookID').innerHTML;
    await deleteBookRequest(bookId);
    hideModal('deleteBookModal');
    await getBooksRequest();
  });
});

function showBooks(books) {
  let arrayBooks = '';
  if (!!books && books.length > 0) {
    books.forEach(books => {
      arrayBooks += `<tr>
        <td scope="row">${books.id}</td>
        <td>${books.title}</td>
        <td>${books.genre}</td>
        <td>${books.author}</td>
        <td>
          <button type="button" class="btn btn-outline-primary" onclick="editBook('${books.id}', '${books.title}', '${books.genre}', '${books.author}')">
            <i class="bi bi-pencil-square"></i>
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-outline-danger" onclick="deleteBook('${book.id}', '${book.title}')">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>;
    });
  } else {
    arrayBooks = `<tr class="table-warning">
      <td colspan="6" class="text-center">No hay libros</td>
    </tr>`;
  }

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = arrayBooks;
}

// Resto de tus funciones como getBooksRequest, saveBookRequest, etc.

// Asegúrate de que las funciones showModal y hideModal estén definidas de acuerdo a tu implementación anterior.

// Finalmente, asegúrate de que estás cargando este archivo JS en tu archivo HTML book.html justo antes de cerrar el cuerpo (</body>) de la siguiente manera:
// <script src="../js/books.js"></script>
