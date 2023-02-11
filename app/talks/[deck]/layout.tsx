const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-screen text-white bg-black place-items-center">
      {children}
    </main>
  );
};

export default Layout;
