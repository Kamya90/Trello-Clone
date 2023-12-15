let dragItem=null;

var items= document.querySelectorAll('.item');
var box=document.querySelectorAll('.Box');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

box.forEach(boxes => {
    boxes.addEventListener('dragover', dragOver);
    boxes.addEventListener('dragenter', dragEnter);
    boxes.addEventListener('dragleave', dragLeave);
    boxes.addEventListener('drop', dragDrop);
});

function dragStart(){
    console.log('Drag started');
    dragItem= this;
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
    console.log('Drag ended');
    this.className= 'item';
    dragItem=null;
}

function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
}

function dragEnter() {
    console.log('drag entered');
}

function dragLeave() {
    console.log('drag left');
}

function dragDrop() {
    console.log('drag dropped');
    this.append(dragItem);
}