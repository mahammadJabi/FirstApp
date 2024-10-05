let medicineInventory = [];

// Function to open the modal
function openModal() {
    document.getElementById('medicineModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('medicineModal').style.display = 'none';
}

// Function to add a medicine to the inventory
function addMedicine() {
    const name = document.getElementById('medName').value;
    const type = document.getElementById('medType').value;
    const quantity = document.getElementById('medQty').value;
    const expiryDate = document.getElementById('medExpiry').value;
    const rack = document.getElementById('medRack').value;
    const boxNo = document.getElementById('medBoxNo').value;

    // Check if all fields are filled
    if (name && type && quantity && expiryDate && rack && boxNo) {
        const medicine = { name, type, quantity, expiryDate, rack, boxNo };
        
        // Add the new medicine to the inventory array
        medicineInventory.push(medicine);
        
        // Render the table to display all added medicines
        renderTable();
        
        // Clear form and close modal
        clearForm();
        closeModal();
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to render the table with all added medicines
function renderTable() {
    const tbody = document.getElementById('medicineTableBody');
    
    // Clear existing rows before rendering
    tbody.innerHTML = ''; 

    // Loop through the inventory and create table rows
    medicineInventory.forEach((medicine, index) => {
        const row = `<tr>
                        <td>${medicine.name}</td>
                        <td>${medicine.type}</td>
                        <td>${medicine.quantity}</td>
                        <td>${medicine.expiryDate}</td>
                        <td>${medicine.rack}</td>
                        <td>${medicine.boxNo}</td>
                        <td><button onclick="deleteMedicine(${index})">Delete</button></td>
                     </tr>`;
        tbody.innerHTML += row;
    });
}

// Function to delete a medicine from the inventory
function deleteMedicine(index) {
    medicineInventory.splice(index, 1); // Remove the selected medicine
    renderTable(); // Re-render the table after deletion
}

// Function to clear the form after submission
function clearForm() {
    document.getElementById('medName').value = '';
    document.getElementById('medType').value = '';
    document.getElementById('medQty').value = '';
    document.getElementById('medExpiry').value = '';
    document.getElementById('medRack').value = '';
    document.getElementById('medBoxNo').value = '';
}
