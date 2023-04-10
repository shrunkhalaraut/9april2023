https://javascript.info/async-await

const req = (url) => {

    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 4500) + 500;

        setTimeout(() => {

            if (delay > 3500) {

                reject('connection timeout')

            } else {

                resolve("website worked!!")

            }

        }, delay)

    })

}

const resp = req('main.com');

resp.then(() => { // success

    console.log("this 1st req worked")

    req('books.com')

        .then(() => {

            console.log("2nd req worked")

        })

        .catch(() => {

            console.log("2nd req rejected")

        })

})

    .catch(() => {

        console.log("1st req rejected")

    })

req('main.com')

    .then(() => {

        console.log("1st req worked!!")

        return req('books.com')

    })

    .then(() => {

        console.log('second req worked')

        return req('insta.com')

    })

    .then(() => {

        console.log('insta req worked')

    })

    .catch(() => {

        console.log("not working")

    })

//async :- syntax sugar for promise

// 1) async functions always return a promise

// 2) if the promise is resolved , we'll get a value

// 3) if the function throws exceptions, the async will return rejection.

const sing = (data) => {

    return new Promise((resolve, reject) => {

        resolve(`LA LA LA LA ${data}`)

    })

}

const sing2 = async () => {

    throw "OH, NO!!"

    return "LA LA LA LA"

}

async function sing3() {

    return "LA LA LA LA"

}

sing("komal").then((data) => {

    console.log("Promise resolved", data)

}).catch((err) => {

    console.log(err)

})

// await :- it can only be used inside async function, waiting for the promise to be resolved.

let komal = new Promise((resolve, reject) => { // website

    setTimeout(() => resolve("done!"), 1000)

});

async function checkingAwait() {

    let result = await komal; // wait until the promise resolves (*)

    let result2 = await komal;

    console.log(result)

    console.log(result2)

}

checkingAwait();