class InputManager {
    constructor(){
        this.registerEventListeners()
    }

    registerEventListeners() {
        // COMMENTS FOR LATER
        let dots = document.querySelectorAll('.dots')
        for(let dot of dots) {
            dot.addEventListener('click', e => {
                console.log("comments")
            })
        }

        // LIKE
        let imgs = document.querySelectorAll("img")
        for(let img of imgs) {
            img.addEventListener('click', e => {
                let [ index ] = img.parentNode.parentNode.attributes
                app.manager.postContainer.posts[index.value].likeCount++
                app.manager.output.innerHTML = app.manager.render()
                this.registerEventListeners()
            })
        }
    }
}

class Manager {
    constructor() {
        this.postContainer = new PostContainer()
        this.output = document.getElementById('posts')
        this.output.innerHTML = this.render()
        this.inputManager = new InputManager()
    }

    render() {
        let string = ""
        let { posts } = this.postContainer
        posts.forEach(post => {
            string += post.display()
        })
        return string
    }
}