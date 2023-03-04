class Parent
{
    constructor(obj1)
    {
        this.a=10
    }
    displayParent()
    {
        console.log("The value of a is : "+this.a);
    }
}
class Child extends Parent{
    constructor(obj2)
    {
        super();
        this.b=20;
        this.result=this.a+this.b;
    }
    displaychild()
    {
        console.log("The value of b is : "+this.b);
        console.log("The result is : "+this.result);
    }
}
var obj1=new Parent(obj1);
var obj2=new Child(obj2);
obj1.displayParent();
obj2.displaychild();