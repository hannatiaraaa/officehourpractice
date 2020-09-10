const nextBtn = document.querySelector(".next-page");
const prevBtn = document.querySelector(".prev-page");

let tableData = [];

const state = {
  querySet: tableData,
  page: 1,
  rows: 2,
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    tableData = [...data];
    state.querySet = [...data];
    buildTable();
  });

function pagination(querySet, page, rows) {
  const trimStart = (page - 1) * rows;
  const trimEnd = trimStart + rows;

  const trimmedData = querySet.slice(trimStart, trimEnd);

  const pages = Math.round(querySet.length / rows);

  return {
    querySet: trimmedData,
    pages: pages,
  };
}

const nextPage = () => {
  if (state.page < Math.round(tableData.length / state.rows)) {
    state.page++;
    buildTable();
  }
};

const prevPage = () => {
  if (state.page !== 1) {
    state.page--;
    buildTable();
  }
};

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);

function buildTable() {
  const table = document.querySelector(".table-body");
  const spanPage = document.querySelector(".button span");

  const data = pagination(state.querySet, state.page, state.rows);
  const myList = data.querySet;

  table.innerHTML = "";

  myList.forEach((user) => {
    const row = `  
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.address.city} ${user.address.street} ${user.address.suite}</td>
            </tr>
                  `;
    table.innerHTML += row;
  });

  spanPage.innerHTML = `Page ${state.page} of ${Math.round(
    tableData.length / state.rows
  )}`;
}
