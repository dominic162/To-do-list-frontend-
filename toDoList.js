var btn=document.getElementById('submit')
var work=document.getElementById('input-field')
var lists=document.getElementById('lists')
var changed
var count=0
work.addEventListener('input',function(e){
    changed=e.target.value
})
work.addEventListener('keyup',function(e){
    var apply=e.keyCode
    if(apply===13){
        if(changed==='' || changed===null || changed===undefined){
            alert('Please add some stuff :-)')
        }
        else{
            adding()
        }
    }
})
function adding(e) {
    if(changed!=='' && changed!==undefined && changed!==null){
        let par=document.createElement('li')
        count=count+1
        par.id='listElement'+count.toString()
        let bache=document.createTextNode(changed)
        par.appendChild(bache)
        let iconE=document.createElement('i')
        iconE.id='icon'+count.toString()
        iconE.className='far fa-trash-alt'
        par.appendChild(iconE)
        lists.appendChild(par)
        work.value=null
    }
    else{
        alert('Please add some stuff :-)')
    }
    changed=""
}
btn.addEventListener('click',adding)
document.addEventListener('click',function(e){
    let t=e.target.id
    let l=t.length
    if(t.substr(0,l-1)==='icon'){
        console.log('clicked on icon')
        let r=t.charAt(l-1)
        let rep=document.getElementById('listElement'+r)
        lists.removeChild(rep)
    }
})
