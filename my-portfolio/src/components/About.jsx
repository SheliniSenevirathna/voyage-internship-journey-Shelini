function About() {
  const showDetails = true; // conditional rendering example

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      {showDetails ? (
        <p>
          Hi 👋, I’m Shelini. I’m a Software Engineering student passionate about 
          building modern web apps with React and AI. I love learning new 
          technologies and creating innovative projects.
        </p>
      ) : (
        <p>Details are hidden.</p>
      )}
    </section>
  );
}

export default About;
