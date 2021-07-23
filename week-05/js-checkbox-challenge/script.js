const checkbox = document.querySelectorAll('input[type=checkbox]')

const inbox = document.querySelector('.inbox')
let checkArray = [];
checkbox.forEach((box) => {
    box.addEventListener('click', function(e) {
            if (e.target.checked) {
                checkArray.push(Array.from(checkbox).indexOf(e.target))
            } else {
                let i = checkArray.lastIndexOf(Array.from(checkbox).indexOf(e.target))
                checkArray.splice(i, 1)
            }
            checkcheck(e)
    })
})



function checkcheck(e) {
    if (checkArray.length !== 0 && e.shiftKey && Array.from(checkbox).indexOf(e.target) > checkArray[checkArray.length-2] && e.target.checked) {
        for (let i = checkArray[checkArray.length-2]; i < Array.from(checkbox).indexOf(e.target); i++) {
            checkbox[i].checked = true;
        }
    } 
    
    if (checkArray.length !== 0 && e.shiftKey && Array.from(checkbox).indexOf(e.target) < checkArray[checkArray.length-2] && e.target.checked) {
        for (let i = Array.from(checkbox).indexOf(e.target); i < checkArray[checkArray.length-2]; i++) {
            checkbox[i].checked = true;
        }
    }

    if (checkArray.length !== 0 && e.shiftKey && Array.from(checkbox).indexOf(e.target) > checkArray[checkArray.length-2] && !e.target.checked) {
        for (let i = checkArray[checkArray.length-2]; i < Array.from(checkbox).indexOf(e.target); i++) {
            checkbox[i].checked = false;
        }
    } 

    if (checkArray.length !== 0 && e.shiftKey && Array.from(checkbox).indexOf(e.target) < checkArray[checkArray.length-2] && !e.target.checked) {
        for (let i = Array.from(checkbox).indexOf(e.target); i < checkArray[checkArray.length-2]; i++) {
            checkbox[i].checked = false;
        }
    }
}