let rowEdit
let submitBtnn = document.getElementById("subBtn");


function publishToTable() {
  if (submitBtnn.innerHTML == "Submit") {

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    checkbox = document.getElementById('checkBox').checked;
    let check
    if (checkbox === true) {
      check = "Yes"
    }
    else {
      check = "No"
    };

    const error = document.getElementById('error');
    error.innerHTML = (!firstName || !email || !lastName || !gender) ? 'All values are required.' : '';
    if (firstName && email && gender && checkBox) {
      const tableElement = document.getElementById('table');
      const trElement = document.createElement('tr');
      const tbodyElement = document.createElement('tbody');
      const nameEle = document.createElement('td');
      const emailEle = document.createElement('td');
      const genderEle = document.createElement('td');
      const checkboxEle = document.createElement('td');
      const editBtn = document.createElement('td');
      const delBtn = document.createElement('td');


      nameEle.innerHTML = document.getElementById('first-name').value + " " + document.getElementById('last-name').value.toUpperCase();
      emailEle.innerHTML = email;
      genderEle.innerHTML = gender;
      checkboxEle.innerHTML = check;
      editBtn.innerHTML = `<button  id="buttoEdit" class="edit-btn" >Edit</button>`;
      delBtn.innerHTML = `<button class="del-btn" >Delete</button>`;


      trElement.appendChild(nameEle);
      trElement.appendChild(emailEle);
      trElement.appendChild(genderEle);
      trElement.appendChild(checkboxEle);
      trElement.appendChild(editBtn);
      trElement.appendChild(delBtn);
      tbodyElement.appendChild(trElement);
      tableElement.appendChild(tbodyElement);
      
      tableElement.style.display="block";




      editBtn.addEventListener("click", function (e) {
        rowEdit = e.target.parentNode.parentNode;
        document.getElementById('first-name').value = firstName;
        document.getElementById('last-name').value = lastName;
        document.getElementById('email').value = email;
        document.getElementById('gender').value = gender;
        document.getElementById('checkBox').checked = check;


        submitBtnn.innerHTML = "Update";

      })

      delBtn.addEventListener("click", function () {
        let del = delBtn.parentNode.rowIndex;
        tableElement.deleteRow(del);
        delBtn.remove()

      })


    }

  }else{
    rowEdit.innerHTML = "";
    submitBtnn.innerHTML = "Submit";
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    checkbox = document.getElementById('checkBox').checked;
    let check
    if (checkbox === true) {
      check = "Yes"
    }
    else {
      check = "No"
    };

    const error = document.getElementById('error');
    error.innerHTML = (!firstName || !email || !lastName || !gender) ? 'All values are required.' : '';
    if (firstName && email && gender && checkBox) {
      const tableElement = document.getElementById('table');
      const trElement = document.createElement('tr');
      const tbodyElement = document.createElement('tbody');
      const nameEle = document.createElement('td');
      const emailEle = document.createElement('td');
      const genderEle = document.createElement('td');
      const checkboxEle = document.createElement('td');
      const editBtn = document.createElement('td');
      const delBtn = document.createElement('td');


      nameEle.innerHTML = document.getElementById('first-name').value + " " + document.getElementById('last-name').value.toUpperCase();
      emailEle.innerHTML = email;
      genderEle.innerHTML = gender;
      checkboxEle.innerHTML = check;
      editBtn.innerHTML = `<button  id="buttoEdit" class="edit-btn" >Edit</button>`;
      delBtn.innerHTML = `<button class="del-btn" >Delete</button>`;


      trElement.appendChild(nameEle);
      trElement.appendChild(emailEle);
      trElement.appendChild(genderEle);
      trElement.appendChild(checkboxEle);
      trElement.appendChild(editBtn);
      trElement.appendChild(delBtn);
      tbodyElement.appendChild(trElement);
      tableElement.appendChild(tbodyElement);




      editBtn.addEventListener("click", function (e) {
        rowEdit = e.target.parentNode.parentNode;
        document.getElementById('first-name').value = firstName;
        document.getElementById('last-name').value = lastName;
        document.getElementById('email').value = email;
        document.getElementById('gender').value = gender;
        document.getElementById('checkBox').checked = check;


        submitBtnn.innerHTML = "Update";

      })

      delBtn.addEventListener("click", function () {
        let del = delBtn.parentNode.rowIndex;
        tableElement.deleteRow(del);
        delBtn.remove()

      })
    }

  }


}


