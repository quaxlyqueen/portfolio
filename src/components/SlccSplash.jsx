import React from "react";

export default function SlccSplash() {
  return (
    <>
      <div id="slcc-splash">
        <div className="header">
          <div className="header-image">
            <img id="profile" src="/images/profile.jpg" />
          </div>
          <div className="header-text">
            <div className="center-column">
              <h1>Hi, I'm Josh Ashton.</h1>
              <h3>
                A Computer Science student at Salt Lake Community College.
              </h3>
            </div>
          </div>
        </div>
        <div className="center-row">
          <div className="text-section center-column">
            <h3>About Me</h3>
            <p className="center-column">
              A mentor once told me that a Political Science degree is useless
              if I want to pursue public policy work. They were absolutely
              right. I'm pursuing a degree in Computer Science. The government
              needs to be more proactive in regulating new developing
              technologies, and I'm hopeful that one day I'll be able to bridge
              that gap. Aside from computers, coding, and politics, some of my
              other interests are Dungeons & Dragons, video games, backpacking,
              and Doctor Who.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
