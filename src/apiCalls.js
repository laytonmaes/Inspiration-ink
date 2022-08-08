export function getRandomWord () {
    return fetch("https://random-word-form.herokuapp.com/random/noun")
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status + "" + response.statusText)
        } else {
            return response.json();
        }
    })

}

export function getWordDefinition (randomWord) {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
    .then(response => {
            if(!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

export function getInspInkPrompts(endPoint) {
    return fetch(`https://inspiration-ink-api.herokuapp.com/api/v1/${endPoint}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status + " " + response.statusText)
        } else {
            return response.json()
        }
    })
}

export function postInspInkPrompts(data) {
    return fetch("https://inspiration-ink-api.herokuapp.com/api/v1/user",
    {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status + " " + response.statusText)
        } else {
            return response.json()
        }
    })
} 