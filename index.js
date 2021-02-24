

class shapeCalc {
    constructor() {
        this.selectShape = document.querySelector("#selectShape");
        this.inputValueScreen = document.querySelector("#inputValues");
        this.outputValues = document.querySelector("#outputValues");
        this.areaValue = document.querySelector("#areaValue");
        this.shapeType = document.querySelector("#shape");

        this.width = document.querySelector("#width");
        this.height = document.querySelector("#height");
        this.radius = document.querySelector("#radius");
        this.side = document.querySelector("#side");
        this.length = document.querySelector("#length");
        this.base = document.querySelector("#base");

        this.area = 0;
    }

    static getShape() {
        const elements = document.getElementsByName("shape");
        for (let i=0; i<elements.length; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }

    inputValues () {
        let shape = shapeCalc.getShape();
        this.selectShape.style.display = 'none';
        this.inputValueScreen.style.display = 'block';
        this.shapeType.innerHTML = shape;

        var elements = document.getElementById("showInputs").getElementsByTagName('input');
        for (let i=0; i<elements.length; i++) {
            elements[i].style.display = 'none';
        }

        if (shape === 'rectangle') {
            this.length.style.display = 'block';
            this.width.style.display = 'block';
        } else if ( shape === 'circle') {
            this.radius.style.display = 'block';
        } else if (shape === 'square') {
            this.side.style.display = 'block';
        } else {
            this.base.style.display = 'block';
            this.height.style.display = 'block';
        }
    }

    calculateArea() {
        let shape = shapeCalc.getShape();
        switch (shape) {            
            case "rectangle":
                this.area = this.length.value * this.width.value;
            break;
            case "circle":
                this.area = Math.PI * this.radius.value * this.radius.value;
                break;
            case "square":
                this.area = this.side.value * this.side.value;
                break;
            case "ellipse":
                this.area = Math.PI * this.base.value * this.height.value;
                break;            
        }
        this.area = Math.ceil(this.area);
        this.showArea();
    }

    showArea() {
        this.inputValueScreen.style.display = 'none';
        this.outputValues.style.display = 'block';
        this.areaValue.innerHTML = this.area;
    }
}

let calc = new shapeCalc();


