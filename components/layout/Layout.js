import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Intro from "./Intro";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  return (
    <div>
      <MainNavigation />
      {router.pathname !== "/" ? (
        <main className={classes.main}>{props.children}</main>
      ) : (
        <main className={classes.main2}>{props.children}</main>
      )}
    </div>
  );
}

export default Layout;
