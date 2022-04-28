export default {
  name: "market",
  title: "Market",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name/City",
      type: "string",
    },
    {
      name: "marketState",
      title: "State",
      type: "string",
    },
    {
      name: "marketHeadline",
      title: "Headline",
      type: "string",
    },
    {
      name: "marketPhone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "marketEmail",
      title: "Email",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "oohImpact",
      title: "Out of Home Impact",
      type: "listBlockContent",
    },
    {
      name: "digitalImpact",
      title: "Digital Impact",
      type: "listBlockContent",
    },
    {
      name: "marketInMotion",
      title: "Market in Motion",
      type: "listBlockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "marketDma",
      title: "DMA",
      type: "array",
      of: [
        {
          type: "marketStats",
        },
      ],
    },
    {
      name: "marketDemographics",
      title: "Market Demographics",
      type: "array",
      of: [
        {
          type: "marketStats",
        },
      ],
    },
    {
      name: "raceDistributionAndEthnicity",
      title: "Race Distribution & Ethnicity",
      type: "array",
      of: [
        {
          type: "marketStats",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
