import classes from "./Intro.module.css";
import Image from "next/image";
import Image1 from "../../public/Images/Image1.png";
import Circle from "./Circle";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-20vh" />
      <div className={classes.card}>
        <h1 className={classes.title}>
          <span className={classes.brandName}>LetsMeet</span> Platform to know
          about In-Person meetups
        </h1>
        <p className={classes.desc}>
          Have a check on meet-ups happening around you or even schedule a
          Meet-up for your friends and Community. It can be used by friends to
          schedule casual meet-ups, by community to organize meet-ups, People
          can join meet-ups if they want to connect with like-minds folks.
        </p>
        <button
          onClick={() => router.push("/meetupListShow")}
          className={classes.button}
        >
          Explore Meetups
        </button>
      </div>
      <div className={classes.card}>
        <Image src={Image1} layout="fill" objectFit="cover" alt="" />
      </div>
    </div>
  );
};

export default Intro;
