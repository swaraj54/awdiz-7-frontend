function Mapping({ students }) {
  console.log(students);
  return (
    <div>
      <h1>Mapping</h1>
      <div>
        {students.map((student) => (
          <h2>{student}</h2>
        ))}
      </div>
    </div>
  );
}

export default Mapping;
