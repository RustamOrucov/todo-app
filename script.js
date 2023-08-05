const inputBox=document.querySelector('#input-box')
const btn=document.querySelector('.btn')

const listContainer=document.querySelector('.list-container')

function addTask(){
    if(inputBox.value===''){
      alert('Please write message')
    }else{
        let liEl=document.createElement('li');
        liEl.innerHTML=inputBox.value;
         listContainer.appendChild(liEl)
         let span=document.createElement('span')
         span.innerHTML='\u00d7'
         liEl.appendChild(span)
    }
}
listContainer.addEventListener('click',function(e){
  if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked')
  }else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove()
  }
},false)