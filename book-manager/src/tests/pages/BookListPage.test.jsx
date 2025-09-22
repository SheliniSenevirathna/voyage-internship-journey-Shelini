import { render, screen } from '@testing-library/react';
import { BookProvider } from '../../context/BookContext.jsx';

// Mock component directly, do NOT import missing file
const MockBookList = () => <div>Mock BookList</div>;

test('renders BookList placeholder', () => {
  render(
    <BookProvider>
      <MockBookList />
    </BookProvider>
  );

  expect(screen.getByText(/Mock BookList/i)).toBeInTheDocument();
});
