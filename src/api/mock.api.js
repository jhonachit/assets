export const layers = [
  {
    idLayer: "E20384D9-548A-4674-ACBA-EC34902492B9",
    layer: "user",
    color: "#ff4646",
  },
  {
    idLayer: "8D353525-7E23-4377-869B-113931337B23",
    layer: "external front",
    color: "#00ab8e",
  },
  {
    idLayer: "A056928B-97F7-4E4B-BFE3-6F6A27E14AB1",
    layer: "external api",
    color: "#00915a",
  },
  {
    idLayer: "BAE4C78D-8DB3-4DBC-9DF0-CCDE4D059B6D",
    layer: "high risk api",
    color: "#a3c439",
  },
  {
    idLayer: "C5F1BE3E-DC87-445D-B81B-844DA95E72B2",
    layer: "high risk app",
    color: "#00685e",
  },
];

export const platforms = [
  { idPlatform: "BB33666D-E790-4DEA-8222-3F5C8DE28007", platform: "USER" },
  {
    idPlatform: "71D598B5-DC78-4CD7-B5B2-84B477796160",
    platform: "MICROSITIO",
  },
  { idPlatform: "B5CDD224-1DF7-4D21-9CE8-F2C4B708313A", platform: "APM" },
  { idPlatform: "3AE429AA-D83D-4F12-A33D-5112029B29E5", platform: "Mashery" },
];

export const components = [
  {
    idComponent: "065278e8-0774-4ced-a7a6-cc990074fbf8",
    component: "Asesor",
    platform: "USER",
    idPlatform: "BB33666D-E790-4DEA-8222-3F5C8DE28007",
    layer: "user",
    idLayer: "E20384D9-548A-4674-ACBA-EC34902492B9",
  },
  {
    idComponent: "a702aa3f-26b0-4838-b2c6-e0fa87a76ecf",
    component: "venta modulares",
    platform: "MICROSITIO",
    idPlatform: "71D598B5-DC78-4CD7-B5B2-84B477796160",
    layer: "external front",
    idLayer: "8D353525-7E23-4377-869B-113931337B23",
  },
  {
    idComponent: "3cedf33d-6fc4-429b-8cab-ac4609d2abe8",
    component: "venta modulares",
    platform: "APM",
    idPlatform: "B5CDD224-1DF7-4D21-9CE8-F2C4B708313A",
    layer: "external api",
    idLayer: "A056928B-97F7-4E4B-BFE3-6F6A27E14AB1",
  },
  {
    idComponent: "e262e309-afed-4b60-b369-d783fd655ef2",
    component: "Auth",
    platform: "APM",
    idPlatform: "B5CDD224-1DF7-4D21-9CE8-F2C4B708313A",
    layer: "external api",
    idLayer: "A056928B-97F7-4E4B-BFE3-6F6A27E14AB1",
  },
];

export const relationship = [
  {
    idRelationship: "4d305ae2-0434-4429-8cdc-39af5c9be7a7",
    from: "065278e8-0774-4ced-a7a6-cc990074fbf8",
    to: "a702aa3f-26b0-4838-b2c6-e0fa87a76ecf",
  },
  {
    idRelationship: "74963538-ab54-424a-86c5-c626773140ff",
    from: "a702aa3f-26b0-4838-b2c6-e0fa87a76ecf",
    to: "3cedf33d-6fc4-429b-8cab-ac4609d2abe8",
  },
  {
    idRelationship: "3c926a54-4b7f-4056-b049-50323206e9d4",
    from: "065278e8-0774-4ced-a7a6-cc990074fbf8",
    to: "3cedf33d-6fc4-429b-8cab-ac4609d2abe8",
  },
];

export const resourceType = [
  {
    idResourceType: "4d305ae2-0434-4429-8cdc-39af5c9be7a7",
    resourceType: "GET",
    colorResourceType: "red",
  },
  {
    idResourceType: "4d305ae2-0434-4429-8cdc-39af5c9be7a7",
    resourceType: "POST",
    colorResourceType: "red",
  },
  {
    idResourceType: "4d305ae2-0434-4429-8cdc-39af5c9be7a7",
    resourceType: "PUT",
    colorResourceType: "red",
  },
  {
    idResourceType: "4d305ae2-0434-4429-8cdc-39af5c9be7a7",
    resourceType: "DELETE",
    colorResourceType: "red",
  },
];

/*
4d305ae2-0434-4429-8cdc-39af5c9be7a7

74963538-ab54-424a-86c5-c626773140ff

3c926a54-4b7f-4056-b049-50323206e9d4

e262e309-afed-4b60-b369-d783fd655ef2
*/
