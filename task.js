const input = document.getElementById('task__input')
const task = document.getElementById('tasks__list')
const remove = document.querySelectorAll('.task__remove')


input.addEventListener('keydown', (e) => {                           
    if (e.key == 'Enter' && input.value.length != 0){
        task.innerHTML += 
         `<div class="task">
            <div class="task__title">
              ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`
        input.value = null
        e.preventDefault()
    }
})


document.addEventListener('click', delTask)
function delTask (event) {
    let target = event.target
    if (Array.from(target.classList).includes('task__remove')){
      target.parentElement.remove()
    }
}