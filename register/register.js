import participantTemplate from './Templates.mjs';


document.addEventListener("DOMContentLoaded", () => { let participantCount = 1;
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", () => { participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("Beforebegin", newParticipantHTML);
    });
});

// Success message template function
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.feeTotal.toFixed(2)} in Fees.`;
  }
  
  // Calculate total fees function
  function totalFees() {
    // Select all elements with IDs that start with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    
    // Convert NodeList to an Array
    feeElements = [...feeElements];
    
    // Use reduce to sum up all fees from the input values
    let total = feeElements.reduce((sum, feeEl) => {
      return sum + (parseFloat(feeEl.value) || 0); // Parse each value as a float, default to 0 if empty
    }, 0);
    
    return total;
  }
  
  // Form submission handler
  function submitForm(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Calculate total fees
    const feeTotal = totalFees();
    
    // Get the adult's name from the form
    const adultName = document.getElementById('adult_name').value;
    
    // Count the number of participants (assuming each fee input corresponds to one participant)
    const participantCount = document.querySelectorAll("[id^=fee]").length;
    
    // Hide the form and show the summary
    const form = document.getElementById('registrationForm');
    const summary = document.getElementById('summary');
    form.classList.add('hide'); // Hides the form (requires CSS class .hide { display: none; })
    summary.classList.remove('hide'); // Shows the summary (if initially hidden with the .hide class)
    
    // Generate and display the summary message
    summary.innerHTML = successTemplate({
      name: adultName,
      participants: participantCount,
      feeTotal: feeTotal
    });
  }
  
  // Attach the event listener to the form submit event
  document.getElementById('registrationForm').addEventListener('submit', submitForm);
  