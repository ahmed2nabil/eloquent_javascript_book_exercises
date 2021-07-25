class Group {
    constructor(){
     this.gr = [];
    }
    add(element) {
       for(let i=0 ;i<this.gr.length;i++){
           if(element === this.gr[i]) return;
       }
       this.gr.push(element);
    }
    delete(element){
        this.gr = this.gr.filter(ele=> ele !== element); 
    }
    has(element) {
        for(let i=0 ;i<this.gr.length;i++){
            if(element === this.gr[i]) return true;
        }
        return false;
    }
    static from(obj) {
        let g = new Group();
        for(let ele of obj){
            g.add(ele);
        }
        return g;
    }
}

let gr1 = new Group();
gr1.add(5);
gr1.add(6);
gr1.add(7);
console.log(gr1.has(6));
gr1.delete(6);
console.log(gr1.has(6));
let gr2 =  Group.from([10,20]);
console.log(gr2);

