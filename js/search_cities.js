let searchInput = document.querySelector('.cities_section_form_wrapper input');

function hide(x){
    x.classList.remove('show');
    x.classList.add('hide');
}
function show(x){
    x.classList.add('show');
    x.classList.remove('hide');
}

/* Debouncer, so when the user type the function runs at most at 200 ms */
function debounce(func,wait=200,immediate=false){
    let timeout;
    return function(){
        let context =this , args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args)
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    }
}

searchInput.addEventListener('input',debounce(searchCity));

function searchCity(e){
    let all = [...document.querySelector('.cities ul').children];
    let reg = new RegExp(`^${e.target.value}`,'i')
    let afterFilter = all.filter((el,idx)=>{
        
        if(reg.test(el.dataset.city)){
            show(el);
            return true;
        }else{
            hide(el);
            return false;
        }
    })
    
    if(afterFilter.length == 0){
        statusLi.innerHTML = 'No cities for your search';
        show(statusLi);
    }else{
        hide(statusLi);       
    }
}