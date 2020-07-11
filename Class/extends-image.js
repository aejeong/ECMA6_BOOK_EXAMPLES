// Image 오브젝트 상속------------------------------------------------------------------ //

class ExtendsImage extends Image{
    constructor(){
        super();
    }

    setProperty(image){
        this.src = image.src;
        this.alt = image.alt;
        this.title = image.title;
    }
}

let imageObj = new ExtendsImage();
let properties = {
    src: '../file/pinksky.jpg',
    alt : '핑크색 하늘',
    title: '핑크색 널은 하늘'
}
imageObj.setProperty(properties);
document.querySelector('body').appendChild(imageObj);