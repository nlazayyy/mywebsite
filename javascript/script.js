 
const dropzone = document.querySelector('.dropzone');
const dropzonePlaceholder = document.querySelector('.dropzone-placeholder');




dropzone.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 


dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
   
  console.log(draggableId); 
  const element = document.getElementById(draggableId);
  dropzone.replaceChild(element, dropzone.children[0]); 
});