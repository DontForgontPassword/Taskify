import "./styles/globals.scss"

import Header from "@/layout/Header/index"
import Todo from "@/layout/Todo/index"

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Todo()}
`