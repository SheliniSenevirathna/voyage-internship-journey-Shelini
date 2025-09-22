import { createUser, getUsers, updateUser, deleteUser } from "./queries/userQueries.js";

(async () => {
  const newUserId = await createUser("Alice", "alice@example.com", "hashedpassword123");
  console.log("Inserted user with ID:", newUserId);

  console.log("All users:", await getUsers());

  await updateUser(newUserId, "Alice Updated", "alice_new@example.com");
  console.log("After update:", await getUsers());

  await deleteUser(newUserId);
  console.log("After delete:", await getUsers());
})();
