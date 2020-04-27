import React from "react";

import net_graph from "../media/net_graph.png";

import "./styles/about-default.css";
import OverlineItem from "../components/OverlineItem.js";

import { Element } from "react-scroll";

export default class Skills extends React.Component {
  render() {
    return (
      <Element id="about-view">
        <div id="about-body">
          <div id="section-body">
            <OverlineItem
              title={"Web & Mobile frontend UI/UX design"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecena."
              }
              icons={["gimp", "lunacy", "inkscape", "adobe-after-effects"]}
            />
          </div>
        </div>
      </Element>
    );
  }
}
