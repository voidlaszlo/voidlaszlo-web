class App {
    output:HTMLElement
    manager:Manager
    constructor() {
        this.output = document.getElementById('root')
        this.output.innerHTML = this.render()
        this.manager = new Manager()
    }

    render() {
        return (
            `
            <div id="location"></div>
            `
        )
    }
}

const app:App = new App()