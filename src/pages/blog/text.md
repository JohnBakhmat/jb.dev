---
layout: "../../layouts/BlogPost.astro"
title: "T3 Stack and My Most Popular Open Source Project Ever"
description: "create-t3-app recently reached 100 stars on GitHub and is my most popular open source project. Learn more about it!"
pubDate: "June 27, 2022"
---




```ts
//src/pages/api/get-link/[slug].ts

import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.status(404).json({ message: "please provide a slug" });

    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.status(404).json({ message: "short link not found" });

    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  res.json(data);

  return;
};
```
