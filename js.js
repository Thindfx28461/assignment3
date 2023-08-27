function handleSubmit(){
    //lấy giá trị của input email
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    //lấy element của thẻ p hiển thị lỗi
    const errorEmail=document.getElementById('error-email');
    //điều kiện email
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // dùng match để kiểm tra email vừa nhập
    const check=emailValue.match(checkMail);
    //lấy phần chứa thoogn tin user
    const sectionContent = document.querySelector('#personal-info .sectionContent')
    console.log(sectionContent);
    //lấy element kiểm soát submit
    const submitControl = document.querySelector('.submit-email')
    if(check){
        sectionContent.style.display = 'block';
        submitControl.style.display='none';
        errorEmail.innerHTML='';
    }
    else {
        errorEmail.innerHTML= 'Vui lòng nhập đúng định dạng email';

    }
}

let viewkn = document.querySelector('.control-view1');
let viewhocvan = document.querySelector('.control-view2');
let viewhd = document.querySelector('.control-view3');
let viewsothich = document.querySelector('.control-view4');
let viewngonngu = document.querySelector('.control-view5');
let viewkynang = document.querySelector('.control-view6');
let kinhnghiem = document.querySelectorAll(".kn");
let hocvan = document.querySelectorAll('.hocvan');
let hoatdong = document.querySelectorAll('.hoatdong');
let ngonngu = document.querySelectorAll('.ngonngu');
let kynang = document.querySelectorAll('.kynang');
let sothich = document.querySelectorAll('.sothich');
let viewless1 = document.querySelector('.less1');
let viewless2 = document.querySelector('.less2');
let viewless3 = document.querySelector('.less3');
let viewless4 = document.querySelector('.less4');
let viewless5 = document.querySelector('.less5');
let viewless6 = document.querySelector('.less6');
let grid = document.querySelector('.grid-item-1');
let project = document.querySelector('.project');

const abc1 = function(){
    if (viewless1.classList.value.includes('hidden')){
        viewkn.classList.remove('hidden');
    }
    else{
        viewkn.classList.add('hidden');
    }
}
const abc2 = function(){
    viewkn.classList.add('hidden');
}
const abc3 = function(){
    if (viewless2.classList.value.includes('hidden')){
        viewhocvan.classList.remove('hidden');
    }
    else{
        viewhocvan.classList.add('hidden');
    }
}
const abc4 = function(){
    viewhocvan.classList.add('hidden');
}
const abc5 = function(){
    if (viewless3.classList.value.includes('hidden')){
        viewhd.classList.remove('hidden');
    }
    else{
        viewhd.classList.add('hidden');
    }
}
const abc6 = function(){
    viewhd.classList.add('hidden');
}
const abc7 = function(){
    if (viewless4.classList.value.includes('hidden')){
        viewsothich.classList.remove('hidden');
    }
    else{
        viewsothich.classList.add('hidden');
    }
}
const abc8 = function(){
    viewsothich.classList.add('hidden');
}
const abc9 = function(){
    if (viewless5.classList.value.includes('hidden')){
        viewngonngu.classList.remove('hidden');
    }
    else{
        viewngonngu.classList.add('hidden');
    }
}
const abc10 = function(){
    viewngonngu.classList.add('hidden');
}
const abc11 = function(){
    if (viewless6.classList.value.includes('hidden')){
        viewkynang.classList.remove('hidden');
    }
    else{
        viewkynang.classList.add('hidden');
    }
}
const abc12 = function(){
    viewkynang.classList.add('hidden');
}

viewkn.addEventListener('click', function(){
    for (let i = 0; i < kinhnghiem.length; i++) {
        kinhnghiem[i].classList.remove('hidden');
    }
    viewkn.classList.add('hidden');
    viewless1.classList.remove('hidden');
})
viewhocvan.addEventListener('click', function(){
    for (let i = 0; i < hocvan.length; i++) {
        hocvan[i].classList.remove('hidden');
    }
    viewhocvan.classList.add('hidden');
    viewless2.classList.remove('hidden');
})
viewhd.addEventListener('click', function(){
    for (let i = 0; i <hoatdong.length; i++) {
        hoatdong[i].classList.remove('hidden');
    }
    viewhd.classList.add('hidden');
    viewless3.classList.remove('hidden');
})
viewsothich.addEventListener('click', function(){
    for (let i = 0; i < sothich.length; i++) {
        sothich[i].classList.remove('hidden');
    }
    viewsothich.classList.add('hidden');
    viewless4.classList.remove('hidden');
})
viewngonngu.addEventListener('click', function(){
    for (let i = 0; i < ngonngu.length; i++) {
        ngonngu[i].classList.remove('hidden');
    }
    viewngonngu.classList.add('hidden');
    viewless5.classList.remove('hidden');
})
viewkynang.addEventListener('click', function(){
    for (let i = 0; i < kynang.length; i++) {
        kynang[i].classList.remove('hidden');
    }
    viewkynang.classList.add('hidden');
    viewless6.classList.remove('hidden');
})
viewless1.addEventListener('click', function(){
    for (let i = 0; i < kinhnghiem.length; i++) {
        kinhnghiem[i].classList.add('hidden');
    }
    viewless1.classList.add('hidden');
    viewkn.classList.remove('hidden');
})
viewless2.addEventListener('click', function(){
    for (let i = 0; i < hocvan.length; i++) {
        hocvan[i].classList.add('hidden');
    }
    viewhocvan.classList.remove('hidden');
    viewless2.classList.add('hidden');
})
viewless3.addEventListener('click', function(){
    for (let i = 0; i <hoatdong.length; i++) {
        hoatdong[i].classList.add('hidden');
    }
    viewhd.classList.remove('hidden');
    viewless3.classList.add('hidden');
})
viewless4.addEventListener('click', function(){
    for (let i = 0; i < sothich.length; i++) {
        sothich[i].classList.add('hidden');
    }
    viewsothich.classList.remove('hidden');
    viewless4.classList.add('hidden');
})
viewless5.addEventListener('click', function(){
    for (let i = 0; i < ngonngu.length; i++) {
        ngonngu[i].classList.add('hidden');
    }
    viewngonngu.classList.remove('hidden');
    viewless5.classList.add('hidden');
})
viewless6.addEventListener('click', function(){
    for (let i = 0; i < kynang.length; i++) {
        kynang[i].classList.add('hidden');
    }
    viewkynang.classList.remove('hidden');
    viewless6.classList.add('hidden');
})





