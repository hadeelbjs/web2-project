function showForm() {
    //const role = document.getElementById('role').value;
    const role = document.querySelector('input[name="role"][type="radio"]:checked').value;
    const patientForm = document.getElementById('patientForm');
    const doctorForm = document.getElementById('doctorForm');
    
    if (role === 'patient') {
      patientForm.style.display = 'block';
      doctorForm.style.display = 'none';
    } else if (role === 'doctor') {
      doctorForm.style.display = 'block';
      patientForm.style.display = 'none';
    }
  }

  function redirect(l){
    window.location.href=l;
  }
  function redirectFromLogin(){
    const role = document.querySelector('input[name="role"][type="radio"]:checked').value;
    
    if (role === 'patient') {
        window.location.href='PatientPage.html';
    } else if (role === 'doctor') {
        window.location.href='doctorPage.html';
    }
  }