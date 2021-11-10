class Bunker{
    constructor(x){
        this.body=createSprite(x,height-120)
        this.body.addImage(Bunkers)
        this.body.scale=(0.7)
        //this.body.debug= true
        this.body.setCollider("rectangle",0,45,100,50)
    }
}