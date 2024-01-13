import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-row overflow-auto">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Headphones" />
      <Button name="Mixes" />
      <Button name="Rap" />
      <Button name="React" />
      <Button name="Node.js" />
      <Button name="Tech Tunes" />
      <Button name="AI Beats" />
      {/* <Button name="Code Jams" />
      <Button name="Synth Sounds" />
      <Button name="Future Tech" />
      <Button name="Algorithmic Beats" />
      <Button name="Geek Grooves" />
      <Button name="Code & Play" />
      <Button name="Electronica" />
      <Button name="CodeFlow" />
      <Button name="Digital Harmony" />
      <Button name="DevWave" />
      <Button name="Bytes & Beats" />
      <Button name="Circuit Sounds" />
      <Button name="Cyber Jams" />
      <Button name="Sonic Scripts" />
      <Button name="Node Groove" />
      <Button name="AI Rhythms" />
      <Button name="Tech Tunes" />
      <Button name="Machine Mixes" />
      <Button name="Digital Discoveries" />
      <Button name="Data Beats" />
      <Button name="Algorithmic Anthems" /> */}
    </div>
  );
};

export default ButtonList;
