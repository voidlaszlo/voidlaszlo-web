class Post {
    constructor(author, description, image) {
        this.author = author
        this.description = description
        this.image = image
        this.index = 0
        this.likeCount = 75
        this.viewCount = 1242
        this.comments = [
            {
                "author" : "pisti",
                "body" : "hello mivan mi"
            }
        ]
    }

    display() {
        return (
            `
            <div index="${this.index}" class="post">
                <h4><span class="symbol">&diams;</span> ${this.author}</h4>
                <div class="post-image">
                    <img src="${this.image}">
                </div>
                <div class="post-body">
                    <small><span class="symbol">&hearts;</span> ${this.likeCount} 	
                    <span class="symbol">&#128065;</span> ${this.viewCount}</small>
                    <p>${this.description}</p>
                    <p class="dots">...</p>
                </div>
            </div>
            `
        )
    }
}

class PostContainer {
    constructor() {
        this.posts = [
            new Post("leiro_p", "#kecske #macska #fecske <br> life is good &#9786; ", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"),
            new Post("magi_k", "#kecske #macska #fecske <br> life is good &#9786; ", "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"),
            new Post("magi_k", "#kecske #macska #fecske <br> life is good &#9786; ", "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80"),
        ]
        this.generateIndex()
    }

    addPost(post) {
        this.posts.push(post)
        this.generateIndex()
    }

    generateIndex() {
        this.posts.forEach(post => {
            post.index = this.posts.indexOf(post)
        })
    }
}