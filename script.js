function manageScan() {
  const scannerBtn = document.getElementById('scan');
  const sendBtn = document.getElementById('send');
  const timeInput = document.getElementById('time');

  let timeValue = "";

  sendBtn.addEventListener('click', () => {
    console.log('sto inviando');
  });

  scannerBtn.addEventListener('click', () => {
    function addTimeToForm() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      timeValue = `${year}/${month}/${day}-${hours}:${minutes}`;

      // Controlla se timeInput esiste prima di assegnare il valore
      if (timeInput) {
        timeInput.value = timeValue;
        console.log("Valore aggiornato di timeInput:", timeInput.value); // Logga direttamente il valore aggiornato
      } else {
        console.error('Elemento con id "time" non trovato.');
      }
    }

    addTimeToForm();
    if(timeInput.value !== ""){
      console.log(timeInput);
      
      sendBtn?.click();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  manageScan();
});
