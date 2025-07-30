let get_message = document.getElementById("get")
let show = document.getElementById("show")
show.classList.remove('design')

let arr = []

function show_grid() {
    show.textContent = ""
    show.classList.add('design')
    
    arr.forEach((item, index) => {
        let upper_div = document.createElement('div')
        let child_div = document.createElement('div')
        child_div.setAttribute("class", "text")
        child_div.classList.add("text")

        let delete_btn = document.createElement('button')
        delete_btn.classList.add('delete_btn')
        delete_btn.textContent = "Delete"

        delete_btn.addEventListener("click", () => {
            arr.splice(index, 1); // remove this task
            show_grid(); // re-render the list 
            if(arr.length == 0) {
              show.classList.remove("design")
            }         
        });

        upper_div.setAttribute("class", "created")
        upper_div.classList.add("created")
        child_div.textContent = item

        show.appendChild(upper_div)
        upper_div.appendChild(child_div)
        upper_div.appendChild(delete_btn)
    })
}

function add_item(text) {
    arr.push(text)
}

document.getElementById("submit").addEventListener("click", () => {
    let convert = get_message.value
    if (convert != "") {
        add_item(convert);
        get_message.value = "";
        show_grid();
    } else {
        alert("Enter some task")
    }
})

document.getElementById("reset").addEventListener("click", () => {
    arr = [];
    show.textContent = ""
    show.classList.remove("design")
})