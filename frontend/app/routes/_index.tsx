// This maps to the "/" route. 
// I.e. "www.<app_name>.com/" maps to here

import type { MetaFunction } from "@remix-run/node";
import { NavBar } from "~/components/navbar/navbar";
import "../stylesheets/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "", content: "" },
  ];
};

export default function Index() {
  return (
    <> 
      <div id="index_page_parent">
        <NavBar/>
        <div id="index_page_middle_section">Middle Section</div>
        <div id="index_page_footer"> Footer</div>
          
      </div>
    </>
  );
}
