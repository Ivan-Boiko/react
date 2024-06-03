const Login = () => {
    function handleFromSubmit(event) {
        event.preventDefault()
        console.log(event.target.username.value)
        console.log(event.target.password.value)
    }
  return (
    <>
    <h1>Login Form</h1>
    <form onSubmit={handleFromSubmit}>
      <label>
        UserName:
        <input type="text" name="username"></input>
      </label>
      <label>
        Password:
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Login;
