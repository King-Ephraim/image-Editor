const inputRange = document.getElementById('range')
const percent = document.querySelector('.percent')



inputRange.addEventListener('input', ()=>{
    let inputValue = inputRange.value;
    percent.textContent = inputValue + '%';

    if(isSelectedLuminosite){
        imageContainer.style.filter = `brightness(${inputValue}%)`;
        activeLuminositeFocus();
    }else if(isSelectedSaturation){
        imageContainer.style.filter = `saturate(${inputValue}%)`;
        activeSaturationFocus();
    }else if(isSelectedInversion){
        imageContainer.style.filter = `invert(${inputValue}%)`;
        activeInversionFocus();
    }else if(isSelectedNiveauGris){
        imageContainer.style.filter = `grayscale(${inputValue}%)`;
        activeNiveauGrisFocus();
    }

})

function activeLuminositeFocus(){
        luminositeButton.classList.add('active');
        saturationButton.classList.remove('active');
        inversionButton.classList.remove('active');
        niveauGrisButton.classList.remove('active');
}

function activeSaturationFocus(){
    saturationButton.classList.add('active');
    luminositeButton.classList.remove('active');
    inversionButton.classList.remove('active');
    niveauGrisButton.classList.remove('active');
}

function activeInversionFocus(){
    inversionButton.classList.add('active');
    luminositeButton.classList.remove('active');
    saturationButton.classList.remove('active');
    niveauGrisButton.classList.remove('active');
}

function activeNiveauGrisFocus(){
    niveauGrisButton.classList.add('active');
    luminositeButton.classList.remove('active');
    saturationButton.classList.remove('active');
    inversionButton.classList.remove('active');
}

const imageContainer = document.getElementById('selected-image');
const inputFile = document.getElementById('file');
const saveButton = document.getElementById('save-image');

saveButton.addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = imageContainer.src;
    link.download = 'image.png';
    link.click();
})

inputFile.addEventListener('change', ()=>{
    imageContainer.src = URL.createObjectURL(inputFile.files[0]);
})

let rotate = 0;

const resetButton      = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    imageContainer.style.filter = 'none';
    imageContainer.style.transform = 'none';
    inputRange.value = 100;
    percent.textContent = '100%';
    luminositeButton.classList.remove('active');
    saturationButton.classList.remove('active');
    inversionButton.classList.remove('active');
    niveauGrisButton.classList.remove('active');
})
const leftRotation     = document.getElementById('left-rotation');

leftRotation.addEventListener('click', ()=>{
    rotate -= 90;
    imageContainer.style.transform = `rotate(${rotate}deg)`; 
    
})

const rightRotation    = document.getElementById('right-rotation');
rightRotation.addEventListener('click', ()=>{
    rotate += 90;
    imageContainer.style.transform = `rotate(${rotate}deg)`;
})

const leftReflect = document.getElementById('left-reflect');
let leftFlip = 1 ;
leftReflect.addEventListener('click', ()=>{
    
    if(leftFlip === 1){
        imageContainer.style.transform = `scaleX(${-1})`;
        leftFlip = -1;
    }else{
        imageContainer.style.transform = `scaleX(${1})`;
        leftFlip = 1;
    }
})
const rightReflect = document.getElementById('right-reflect');  
let rightFlip = 1;
rightReflect.addEventListener('click', ()=>{
    if(rightFlip === 1){
        imageContainer.style.transform = `scaleY(${-1})`;
        rightFlip = -1;
    }else{
        imageContainer.style.transform = `scaleY(${1})`;
        rightFlip = 1;
    }
})
const luminositeButton = document.getElementById('luminosite');
const saturationButton = document.getElementById('saturation');
const inversionButton  = document.getElementById('inversion');
const niveauGrisButton = document.getElementById('niveau-gris');
const filterName       = document.getElementById('fiter-name');

let isSelectedLuminosite = false;
let isSelectedSaturation = false;
let isSelectedInversion = false;
let isSelectedNiveauGris = false;

function activeLuminosite(){
    isSelectedLuminosite = true;
    isSelectedSaturation = false;
    isSelectedInversion = false;
    isSelectedNiveauGris = false;
    filterName.textContent = 'Luminosite';
}
function activeSaturation(){
    isSelectedSaturation = true;
    isSelectedLuminosite = false;
    isSelectedInversion = false;
    isSelectedNiveauGris = false;
    filterName.textContent = 'Saturation';
}

function activeInversion(){
    isSelectedInversion = true;
    isSelectedSaturation = false;
    isSelectedLuminosite = false;
    isSelectedNiveauGris = false;
    filterName.textContent = 'Inversion';
}
function activeNiveauGris(){
    isSelectedNiveauGris = true;
    isSelectedInversion = false;
    isSelectedSaturation = false;
    isSelectedLuminosite = false;
    filterName.textContent = 'Niveaux de gris';
}
luminositeButton.addEventListener('click', ()=>{
    activeLuminosite();
    activeLuminositeFocus();
})
saturationButton.addEventListener('click', ()=>{
    activeSaturation();
    activeSaturationFocus();
})
inversionButton.addEventListener('click', ()=>{
    activeInversion();
    activeInversionFocus();
})
niveauGrisButton.addEventListener('click', ()=>{
    activeNiveauGris();
    activeNiveauGrisFocus();
})

