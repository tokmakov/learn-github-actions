const core = require('@actions/core')
const fetch = require('node-fetch')

try {
    const chat = core.getInput('chat')
    const token = core.getInput('token')
    const result = core.getInput('result')

    let message = 'Задание завершилось успешно'
    if (result == 'failure') message = 'Задание завершилось ошибкой'
    if (result == 'skipped') message = 'Задание было пропущено'
    if (result == 'cancelled') message = 'Задание было отменено'

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            chat_id: chat,
            text: message
        })
    })
} catch(error) {
    core.setFailed(error.message)
}
