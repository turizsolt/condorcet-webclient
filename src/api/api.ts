export async function apiFetchUser(electionId: string) {
  const result = await fetch(
    `http://api.condorcet.zsiri.eu/election/${electionId}`
  );
  const data = await result.json();

  return data.options.map((elem: string, idx: number) => ({
    id: idx,
    name: elem
  }));
}

export async function apiSubmit(electionId: string, arr: any) {
  await fetch(`http://api.condorcet.zsiri.eu/election/${electionId}/vote`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(arr)
  });
}
