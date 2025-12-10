import { Header } from "@/layout/Header/Header"
import { Todo } from "@/layout/Todo/Todo"
import { Aside } from "@/layout/Aside/Aside"
import { Main } from "@/layout/Main"

function App() {
  return (
    <>
      <Header />
      <Main>
        <Todo />
        <Aside />
      </Main>
    </>
  )
}

export default App
