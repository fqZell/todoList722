const note = () => {

    const inputEl = document.querySelector('.input')
    const btnEl = document.querySelector('.button')
    const listsEl = document.querySelector('.lists')

    let notes = JSON.parse(localStorage.getItem('notes')) || []

    function arrayNote() {
        if(notes.length === 0) {
            listsEl.innerHTML = 'Добавьте заметку'
            return
        }

        listsEl.innerHTML = ''
        for(let i = 0; i < notes.length; i++) {
            listsEl.insertAdjacentHTML('afterbegin', getNote(notes[i], i))
        }   
    }

    arrayNote() 

    btnEl.addEventListener('click', () => {

        if (inputEl.value.length === 0) {
            return
        }

        const newNote = {
            title: inputEl.value 
        }

        notes.push(newNote)
        localStorage.setItem('notes', JSON.stringify(notes))
        arrayNote()

        inputEl.value = ''

    })


    function getNote(note, index) {
        return `
        
            <li class="list">

                <p>
                    ${note.title}
                </p>

                <button data-type="remove" data-index=${index} class="remove">Удалить</button>

            </li>
        
        `
    }

    listsEl.addEventListener("click", (event) => {

        if (event.target.dataset.index) {
            const index = parseInt(event.target.dataset.index)
            const type = event.target.dataset.type
            console.log(index);
            console.log(type);

            if (type === "remove") {
                notes.splice(index, 1)
                
            }

            arrayNote()
        }

    })

}

const init = () => {
    note()
}

document.addEventListener("DOMContentLoaded", init)
