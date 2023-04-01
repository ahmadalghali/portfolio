import Image from "next/image";
import React from "react";

type Props = {};

export default function CV({}: Props) {
  return (
    <div>
      <embed src='/ahmad-alghali-cv.pdf' width='100%' height='1200' />
    </div>
  );
}
