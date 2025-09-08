function Projects() {
  const projects = [
    "Mood-Based Food Ordering System",
    "Cupcake Factory Mobile App",
    "Event Management SOC",
    "Movie Theater web application",
    "Stutdent marks improvement system web application",

  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
      <ul className="space-y-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className="border p-3 rounded shadow-sm hover:bg-gray-200 transition"
          >
            {project}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
