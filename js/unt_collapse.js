// JavaScript Document

/**
 * Adds the Event Listener to the H3 tag for collapsible sections.
 */
function collapse_listener(){
  const col_heads = document.querySelectorAll('.collapse-group h3');

  col_heads.forEach(function(head){
    head.addEventListener('click', function(){
      expand_block(this);
    });
  });
}


/**
 * Add the 'closed' class to collapse-group divs and a '+' element to the collapse-group headers.
 */
function collapse_setup(){

  let collapse_groups = document.querySelectorAll('.collapse-group');
  let i;

  for(i=0; i<collapse_groups.length; i++){
    collapse_groups[i].children[1].classList.add('closed');
    let icon = collapse_groups[i].querySelector('span.header');
    if(!icon){
      collapse_groups[i].children[0].insertAdjacentHTML('afterbegin','<span class="header closed">+</span>');
    }
  }
  // Add the event listener to the H3 tags
  collapse_listener();
}


/**
 * Expand the accordion block.
 */
function expand_block(block){
  block = block.parentElement;
  let target = document.querySelector('.hash-target');
  if(target){ target.classList.remove('hash-target');}

  let expand = [block.children[1], block.children[0].children[0]];
  let expand_height = block.children[1].scrollHeight + 'px';
  let i;

  if(expand[0].classList.contains('closed')){
    //Find and close any open blocks
    let expanded = document.querySelectorAll('.open');

    if(expanded.length != 0){
      for(i=0; i < expanded.length; i++){
        if(expanded[i].classList.contains('hash-target')){
          expanded[i].classList.remove('hash-target');
        }
        expanded[i].classList.remove('open');
        expanded[i].classList.add('closed');
        expanded[i].removeAttribute('style');
      }
    }
    for(i=0; i<expand.length; i++){
      expand[i].classList.remove('closed');
      expand[i].classList.add('open');
      if(expand[i].tagName == 'DIV'){
        expand[i].style.height = expand_height;
      }
    }

  }
  else{
    for(i=0; i<expand.length; i++){
      expand[i].classList.remove('open');
      expand[i].classList.add('closed');
      if(expand[i].tagName === 'DIV'){
        expand[i].removeAttribute('style');
      }
    }
  }
}

document.onreadystatechange = function () {
  if(document.readyState == 'complete'){
    collapse_setup();
  }
}
