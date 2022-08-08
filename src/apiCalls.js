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

export function getUserSubmissions () {
    return fetch(`http://localhost:3001`)
    .then(response => {
            if(!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
} 

export function getInspInkPrompts(endPoint) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status + " " + response.statusText)
        } else {
            return response.json()
        }
    })
}

export function postInspInkPrompts(data) {
    return fetch("http://localhost:3001/api/v1/user",
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