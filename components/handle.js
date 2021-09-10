const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const works = []

    const root = $('#root')
    const submit = $('#submit')
    const input = $('#input')

    return {
        add(work) {
            works.push(work)
        },
        delete(index) {
            works.splice(index, 1)
        },
        render() {
            const html = works.map((work, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${work}</td>
                    <td><button id="finish" data-index=${index} class="delete btn btn-danger">Chưa hoàn thành</button></td>
                </tr>
                    `).join('')
            root.innerHTML = html
        },
        handleDelete(e) {
            let deleteSure = confirm('Xoá công việc đã hoàn thành?')
            if (deleteSure) {
                const deleteBtn = e.target.closest('.delete')
                if (deleteBtn) {
                    const index = deleteBtn.dataset.index
                    this.delete(index)
                    this.render()
                }
            }
            else {
                console.log(finish)
                document.getElementById("finish").className = "delete btn btn-success"
                document.getElementById("finish").innerHTML = "Đã hoàn thành"
            }
        },
        init() {
            submit.onclick = () => {
                const work = input.value
                this.add(work)
                this.render()

                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})()

app.init()