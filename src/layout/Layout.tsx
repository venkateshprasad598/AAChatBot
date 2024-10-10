import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
