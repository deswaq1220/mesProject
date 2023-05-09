function toggleCheckbox(row) {
  const checkbox = row.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  row.style.backgroundColor = checkbox.checked ? '#DDEAFD' : '#F2F3F4';
}

function changeColor(row) {
  row.style.backgroundColor = '#DDEAFD';
}