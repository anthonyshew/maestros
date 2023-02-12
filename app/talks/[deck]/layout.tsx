const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-screen text-black place-items-center">
      {children}
    </main>
  );
};

export default Layout;
