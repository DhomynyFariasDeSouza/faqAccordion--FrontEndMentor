let acc = document.getElementsByClassName('pergunta');

for (let i = 0;i <acc.length;i++){
    acc[i].addEventListener('click',function (){
        this.classList.toggle('active');


    let text = this.nextElementSibling;
    if (text.style.display === "block") text.style.display = "none";
        else text.style.display = "block";
    })
}
