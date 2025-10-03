const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");

// Table body where rows will be added
const bookList = document.getElementById("book-list");

function tableData() {
	const tableRow = document.createElement("tr");
	tableRow.innerHTML = `
		<td>${title.value}</td>
		<td>${author.value}</td>
		<td>${isbn.value}</td>
		<td><button class="delete">❌</button></td>
	`;

	// Append row only if any input is filled
	if (title.value || author.value || isbn.value) {
		bookList.appendChild(tableRow);
	}

	// clear inputs after adding
	title.value = "";
	author.value = "";
	isbn.value = "";
}

// Event delegation for delete buttons
bookList.addEventListener("click", function(e) {
	if (e.target && e.target.classList.contains("delete")) {
		e.target.closest("tr").remove(); // remove the row
	}
});

submitBtn.addEventListener("click", tableData);
