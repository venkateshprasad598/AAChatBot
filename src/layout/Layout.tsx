import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <h1>Sidebar</h1>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
