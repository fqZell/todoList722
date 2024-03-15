const note = () => {

    const inputEl = document.querySelector('.input')
    const btnEl = document.querySelector('.button')
    const listsEl = document.querySelector('.lists')

    const notes = [
        {
            title: 'Тут будут ваши будущие заметки'
        }
    ]

    function arrayNote() {
        listsEl.innerHTML = ''
        for(let i = 0; i < notes.length; i++) {
            listsEl.insertAdjacentHTML('afterbegin', getNote(notes[i], i))
            // console.log(notes);
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

}

const init = () => {
    note()
}

document.addEventListener("DOMContentLoaded", init)
