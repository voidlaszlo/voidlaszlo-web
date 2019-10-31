class App {
    constructor() {
        this.output = document.getElementById('root')
        this.output.innerHTML = this.render()
        this.manager = new Manager()
    }

    render() {
        return (
            `
            <div id="posts"></div>
            `
        )
    }
}

const app = new App()