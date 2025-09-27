export const Book = {
  findAll: async (pool) => {
    const [rows] = await pool.query("SELECT * FROM books");
    return rows;
  },
};
