console.log('Hello world'); 
document.title = 'Hello'

// var head1 = document.getElementsByClassName('list-group-item')
// console.log(head1)
// head1[2].style.fontWeight = 'bold'

var a = document.querySelector('#header-title') ;
console.log(a.textContent)

var b = document.querySelectorAll('.list-group-item:nth-child(2)') ;

console.log(b.textContent)
