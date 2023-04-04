import documentation from "../data/documentation";

function renderNavBarLinks() {

    let liList = []
    let ul

    documentation.forEach(config => {
        // each ID
        let eachId = config.configName

        // wrapper for the links
        ul = document.createElement('ul')
        ul.id = 'documentation-links'

        // li for links
        let li = document.createElement('li')
        // the actual links
        let links = document.createElement('a')
        links.setAttribute('href', `#${eachId}`)
        links.textContent = eachId

        // appending the children to parents
        li.append(links)
        // pushing all the li elements into an array
        liList.push(li)

    })
    // appending the li elements into a wrapper (ul)
    liList.forEach(li => {
        ul.append(li)
    })

    return ul


}

export default renderNavBarLinks