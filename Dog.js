class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    // setMatchStatus(bool) {
    //     this.hasBeenLiked = bool
    //     this.hasBeenSwiped = true
    // }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h3> ${name}, ${age} </h3>
                    <p class="dog-bio">${bio}</p>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default Dog