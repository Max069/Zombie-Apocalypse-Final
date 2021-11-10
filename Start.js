class Start{
    display(){
        this.title= createElement('h2')
        this.title.html("Zombie Apocalypse")
        this.title.position(width/2-200,100)

        this.button= createButton('Start')
        this.button.position(width/2-50,250)

        this.button.mousePressed(()=>{
            gameState="Play1"
        })    
    } 
    display1(){
        this.title=createElement('h4')
        this.title.html("Story: You find that everyone is turning into zombies and there is a bunker ahead where u can go and survive")
        this.title.position(width/2-500,100)

        this.button= createButton('Start')
        this.button.position(width/2-50,250)

        this.button.mousePressed(()=>{
            gameState="Play"
        })

    }
}