const tableElement = document.getElementById('table'),
    form1 = document.getElementById("myForm"),
    form2 = document.getElementById("myForm2"),
    updateDiv = document.getElementById("upDate");
let rows = tableElement.children[1].getElementsByTagName('tr');

function checkBoxValue(box) {
  if (box.checked) {
      box.value = "Yes";
  } else {
      box.value = "No";
  }
}

function publishToTable() {
  tableElement.style.display="block";
  let trElement = document.createElement('tr'),
      nameEle = document.createElement('td'),
      emailEle = document.createElement('td'),
      genderEle = document.createElement('td'),
      checkboxEle = document.createElement('td'),
      editEle = document.createElement('td'),
      delEle = document.createElement('td');
  nameEle.innerHTML = document.getElementById('first-name').value + " " + document.getElementById('last-name').value.toUpperCase();
  emailEle.innerHTML = document.getElementById('email').value;
  genderEle.innerHTML = document.getElementById('gender').value;
  checkboxEle.innerHTML = document.getElementById("checkBox").value;
  editEle.innerHTML = "<input type='button' class='edit-button' value='Edit' onclick='edit(this)'>";
  delEle.innerHTML = "<input type='button' class='delete-button' value='Delete' onclick='delBtn(this)'>";
  trElement.appendChild(nameEle);
  trElement.appendChild(emailEle);
  trElement.appendChild(genderEle);
  trElement.appendChild(checkboxEle);
  trElement.appendChild(editEle);
  trElement.appendChild(delEle);
  form1.reset();
 tableElement.children[1].insertBefore(trElement, tableElement.children[0].childNodes[trElement.length]);
  return false;
};

function edit(e) {
  if (e.parentElement.parentElement.cells[3].innerHTML === "No") {
      document.getElementById('checkBox2').checked = false;
  } else {
      document.getElementById('checkBox2').checked = true;
  }


  updateDiv.style.display = "block";
  form1.style.visibility = "hidden";
  for (let i = 0; i < rows.length; i++) {
      rows[i].onclick = function editBtn() {
          let name = this.cells[0].innerHTML,
              fullName = name.split(" "),
              firstName = fullName[0],
              lastName = fullName[1],
              first = document.getElementById('first-name2'),
              last = document.getElementById('last-name2'),
              mail = document.getElementById('email2'),
              gend = document.getElementById('gender2');
          first.value = firstName;
          last.value = lastName;
          mail.value = this.cells[1].innerHTML;
          gend.value = this.cells[2].innerHTML;
      };

    }
    
    form2.onsubmit = function updateData() {
      updateDiv.style.display = "none";
      form1.style.visibility = "visible";
      e.parentElement.parentElement.cells[0].innerHTML = document.getElementById('first-name2').value + " " + document.getElementById('last-name2').value;
      e.parentElement.parentElement.cells[1].innerHTML = document.getElementById('email2').value;
      e.parentElement.parentElement.cells[2].innerHTML = document.getElementById('gender2').value;
      e.parentElement.parentElement.cells[3].innerHTML = document.getElementById('checkBox2').value;
      return false;
  };
};

function delBtn(r) {
  var deleteRow = r.parentNode.parentNode.rowIndex;
  tableElement.deleteRow(deleteRow);
};

  
