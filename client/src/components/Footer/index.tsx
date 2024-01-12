export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-9 px-6 mt-auto">
      <p>© Max Zahorskyi, 2021-{currentYear}</p>
    </footer>
  );
};
