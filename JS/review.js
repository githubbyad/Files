document.querySelectorAll(`#StaffLOV option`).forEach(r => {
  if (r.innerText == `review`) {
    r.style.color = `red`;
  }
});
document.querySelector(`#StaffLOV`).addEventListener(`change`, s => {
  if (document.form1.StaffLOV.options[document.form1.StaffLOV.selectedIndex].text == `review`) {
    if (document.form1.StaffResponse.value == ``) {
      document.form1.StaffResponse.value = `&#10148; Reviewed all responses? (Yes/No): \n\n&#10148; Reviewed all changes done by staff? (Yes/No): \n\n&#10148; Are all of the issues fixed? (Yes/No): `;
    }
  }
});
