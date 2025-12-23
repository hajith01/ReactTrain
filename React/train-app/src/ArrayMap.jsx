function ArrayMap() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div style={{ textAlign: "center", marginTop: 10 }}>
      <h1>Fruits List</h1>
      <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayMap;
