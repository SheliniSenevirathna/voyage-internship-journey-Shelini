export const User = {
  findByEmail: async (pool, email) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [email]);
    return rows[0];
  },
};
