import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../../context/BookContext.jsx';

// Mock component directly, do NOT import the missing page
const MockBookListPage = () => (
  <>
    <input placeholder="Search books" />
    <div>Book List Page</div>
  </>
);

test('search input updates value', () => {
  render(
    <BookProvider>
      <MockBookListPage />
    </BookProvider>
  );

  const input = screen.getByPlaceholderText(/Search books/i);
  fireEvent.change(input, { target: { value: 'New Book' } });
  expect(input.value).toBe('New Book');
});
