import SpeechToText from "@/components/SpeechToText";
import Head from "next/head";

const languages = [
  {
    no: "16",
    name: "English",
    native: "English",
    code: "en",
  },
  {
    no: "27",
    name: "Hindi",
    native: "हिन्दी",
    code: "hi",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Hearing Assistant</title>
      </Head>
      <SpeechToText languages={languages} />;
    </>
  );
}
