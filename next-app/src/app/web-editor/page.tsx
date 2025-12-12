import WebEditor from "@/components/Editor/WebEditor";
import template from "@/shared/template-web.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaali Coder Web Editor: HTML, CSS, JavaScript Online IDE",
  description:
    "Kaali Coder’s web editor delivers a high-performance online IDE for building in HTML, CSS, and JavaScript. Create, test, and ship web projects with real-time previews and intelligent AI assistance.",
  keywords: ["web editor", "online IDE", "HTML editor", "CSS editor", "JavaScript editor", "kaali coder"],
};

const Page = () => {
  return <WebEditor data={{ languages: template }} />;
};
export default Page;