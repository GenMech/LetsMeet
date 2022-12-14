import { Fragment } from "react";
// import { getStaticProps } from "..";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetUpDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://GiteshPareek:eGMSALMvO28HvudS@cluster0.tkdoyug.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // find gives me access to all meetups
  // {} empty object means no filter criteria, means i want all objects

  client.close();

  return {
    //    fallback: false,
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetUpID: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from single meetup
  const meetUpId = context.params.meetUpID; // our identifiers between the square bracket will be properties the values will be actual values encoded in url

  const client = await MongoClient.connect(
    "mongodb+srv://GiteshPareek:eGMSALMvO28HvudS@cluster0.tkdoyug.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetUpId),
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
