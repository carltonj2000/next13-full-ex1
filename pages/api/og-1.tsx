import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "World 3!";
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello {text}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
