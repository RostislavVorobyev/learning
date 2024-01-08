export async function fetchData(url) {
  try {
    console.log("api");
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("AAAA");
  }
}
