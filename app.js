let medicineInventory = [];

function openModal() {
    document.getElementById('medicineModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('medicineModal').style.display = 'none';
}

function addMedicine() {
    const name = document.getElementById('medName').value;
    const type = document.getElementById('medType').value;
    const quantity = document.getElementById('medQty').value;
    const expiryDate = document.getElementById('medExpiry').value;

    if (name && type && quantity && expiryDate) {
        const medicine = { name, type, quantity, expiryDate };
        medicineInventory.push(medicine);
        renderTable();
        clearForm();
        closeModal();
    } else {
        alert("Please fill in all fields.");
    }
}

function renderTable() {
    const tbody = document.getElementById('medicineTableBody');
    tbody.innerHTML = ''; // Clear table

    medicineInventory.forEach((medicine, index) => {
        const row = `<tr>
                        <td>${medicine.name}</td>
                        <td>${medicine.type}</td>
                        <td>${medicine.quantity}</td>
                        <td>${medicine.expiryDate}</td>
                        <td><button onclick="deleteMedicine(${index})">Delete</button></td>
                     </tr>`;
        tbody.innerHTML += row;
    });
}

function deleteMedicine(index) {
    medicineInventory.splice(index, 1);
    renderTable();
}

function clearForm() {
    document.getElementById('medName').value = '';
    document.getElementById('medType').value = '';
    document.getElementById('medQty').value = '';
    document.getElementById('medExpiry').value = '';
}
