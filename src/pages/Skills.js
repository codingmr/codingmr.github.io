import React from "react";

import net_graph from "../media/net_graph.png";

import "./styles/skills-default.css";
import OverlineItem from "../components/OverlineItem.js";

import gimp from '../media/icons/ic_gimp.svg';
import adobeaftereffects from '../media/icons/ic_adobeaftereffects.svg';
import android from '../media/icons/ic_android.svg';
import babel from '../media/icons/ic_babel.svg';
import bootstrap from '../media/icons/ic_bootstrap.svg';
import css from '../media/icons/ic_css.svg';
import git from '../media/icons/ic_git.svg';
import google from '../media/icons/ic_google.svg';
import github from '../media/icons/ic_github.svg';
import inkscape from '../media/icons/ic_inkscape.svg';
import jenkins from '../media/icons/ic_jenkins.svg';
import js from '../media/icons/ic_js.svg';
import lunacy from '../media/icons/ic_lunacy.svg';
import nodejs from '../media/icons/ic_nodejs.svg';
import npm from '../media/icons/ic_npm.svg';
import playstore from '../media/icons/ic_playstore.svg';
import raspberrypi from '../media/icons/ic_raspberrypi.svg';
import react from '../media/icons/ic_react.svg';
import reactnative from '../media/icons/ic_reactnative.svg';
import html from '../media/icons/ic_html.svg';
import python from '../media/icons/ic_python.svg';
import stackoverflow from '../media/icons/ic_stackoverflow.svg';
import java from '../media/icons/ic_java.svg';

// icons still to add:
// bash, cmd, ssh, jest, eslint, prettier, metrobundler, gradle, agile method
// machine learning, web scraping, debian, windows, slack, zoom, edge, firefox
// safari, opera, chrome, vivaldi, iOS, macOS, Linux

import { Element } from "react-scroll";

export default class Skills extends React.Component {
  render() {
    return (
      <Element id="skills-view">
        <div id="skills-body">
          <div id="section-body">
            <OverlineItem
              title={"Web & Mobile frontend UI/UX design"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecena."
              }
              icons={[{key: 0, src: gimp, toolTip: "Gimp" },
                      {key: 1, src: lunacy, toolTip: "Lunacy" },
                      {key: 2, src: inkscape, toolTip: "Inkscape" },
                      {key: 3, src: adobeaftereffects, toolTip: "Adobe After Effects" }]}
            />
            <OverlineItem
              title={"Responsive web development"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecena."
              }
              icons={[{key: 0, src: react, toolTip: "React" },
                      {key: 1, src: html, toolTip: "HTML 5" },
                      {key: 2, src: css, toolTip: "CSS 3" },
                      {key: 3, src: js, toolTip: "Javascript es6" },
                      {key: 4, src: git, toolTip: "Git" },
                      {key: 5, src: npm, toolTip: "Npm" },
                      {key: 6, src: nodejs, toolTip: "Node js" },
                      {key: 7, src: bootstrap, toolTip: "React bootstrap" }]}

            />
            <OverlineItem
              title={"Cross-platform mobile development"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecena."
              }
              icons={[{key: 0, src: react, toolTip: "React Native" },
                      {key: 1, src: js, toolTip: "Javascript es6" },
                      {key: 2, src: git, toolTip: "Git" },
                      {key: 3, src: npm, toolTip: "Npm" },
                      {key: 4, src: nodejs, toolTip: "Node js" },
                      {key: 5, src: babel, toolTip: "Babel" },
                      {key: 6, src: android, toolTip: "Android" }]}
            />
            <OverlineItem
              title={"Continuous Integration, testing & deployment"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecena."
              }
              icons={[{key: 0, src: jenkins, toolTip: "Jenkins" },
                      {key: 1, src: git, toolTip: "Git" },
                      {key: 2, src: github, toolTip: "Github API" },
                      {key: 3, src: raspberrypi, toolTip: "Raspberry Pi" },
                      {key: 4, src: playstore, toolTip: "Google Playstore" }]}
            />
          </div>
        </div>
      </Element>
    );
  }
}
