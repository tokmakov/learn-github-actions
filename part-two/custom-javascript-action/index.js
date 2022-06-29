const core = require('@actions/core')
const fetch = require('node-fetch')

const fetchUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    return data
}

try {
    const id = core.getInput('user_id')
    fetchUser(id).then(user => {
        console.log(user.name)
        core.setOutput('user_name', user.name) // выходные данные
    })
} catch(error) {
    core.setFailed(error.message)
}

