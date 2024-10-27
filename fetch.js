// How can we specify data types besides JSON?
const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
  method,
  body: requestBody,
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
  },
});
