function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p>&copy; {year} Shelini’s Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
