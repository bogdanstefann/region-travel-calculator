// Proxy pentru lista de regiuni WarEra (evită problemele de CORS și pune cache 5 min)
export default async () => {
  const res = await fetch("https://api2.warera.io/trpc/region.getRegionsObject");
  return new Response(await res.text(), {
    status: res.status,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=300",
    },
  });
};

export const config = { path: "/api/regions" };
