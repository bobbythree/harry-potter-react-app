import BookList from "./components/BookList"
import SpellList from "./components/SpellList"
import CharacterList from "./components/CharacterList"
import Header from "./components/Header"
import ScrollToTopButton from "./components/ScrollToTopButton"

export default function App() {
  return (
    <>
      <Header />
      <BookList />
      <CharacterList />
      <SpellList />
      <ScrollToTopButton />
    </>
  )
}


