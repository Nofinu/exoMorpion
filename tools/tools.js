import readline from "readline"
import {stdin, stdout } from "process"

// création d'une fonction pour recupere la saisie dans la console
export const poserUneQuestion = async (question) => {
    console.log(question)
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close()
    return result
}
