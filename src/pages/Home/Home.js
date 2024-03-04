import React from "react";
import { SectionA } from "./Home.styles";

import { FullSection, TimeLine } from "components";

import TimelineItem from "components/TimelineItem/TimelineItem";
import NamedSection from "components/NamedSection/NamedSection";

import { juntoHuesos } from "assets/jsonInfo/juntoHuesos";
import { tintaAyer } from "assets/jsonInfo/tintaAyer";
import { vertigo } from "assets/jsonInfo/vertigo";
import { timeLine } from "assets/jsonInfo/timeline";
import { vivencias } from "assets/jsonInfo/vivencias";
import { HomeArticle } from "components";

const Home = () => {
  return (
    <FullSection>
      <SectionA>
        <HomeArticle />
        <TimeLine>
          {timeLine.map(({ id, date, text, image }) => (
            <TimelineItem key={id} date={date} text={text} image={image} />
          ))}
        </TimeLine>
      </SectionA>
      <NamedSection sectionName={"Voy junto a mis huesos"} data={juntoHuesos} />
      <NamedSection
        sectionName={"Con tinta de ayer: Carilda y Girón"}
        data={tintaAyer}
      />

      <NamedSection
        sectionName={"Corazón de vértigo y remanso"}
        data={vertigo}
      />
      <NamedSection sectionName={"Vivencias"} data={vivencias} />
    </FullSection>
  );
};

export default Home;
