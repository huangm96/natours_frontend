import { Buffer } from "buffer";

export const convertBufferToImage = (buffer, contentType) => {
  const imgBuffer = new Buffer.from(buffer).toString("base64");
  return `data:${contentType};base64, ${imgBuffer}`;
};
