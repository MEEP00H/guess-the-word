import React from "react";
import Head from "next/head";

function MetaHead() {
  const title = "Guess the word";
  const description = "เกมส์ใบ้คนละคำ";
  const web_url = "https://guess-the-word-iota.vercel.app";
  const og_image = "og_image.jpg";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={web_url + "/" + og_image} />

      <meta property="og:url" content={web_url} />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:image:src" content={web_url + "/" + og_image} />
    </Head>
  );
}

export default MetaHead;
