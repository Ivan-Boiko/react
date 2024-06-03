function Person(props) {
  const { firstName, LastName, email, image } = props;

  return (
    <div className="card">
      <img src={image} alt="img" />
      <h3>
        {firstName} {LastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}

export default Person;
