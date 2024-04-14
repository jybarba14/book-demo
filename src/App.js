import './App.css';
import { BookCard } from './BookCard';
import { bookList } from './components/dataset';

function App() {

  return (
    <div>
      <h1>Book project</h1>
      {bookList.map((book) => <BookCard book={book} />)}
    </div>
  );
}

export default App;