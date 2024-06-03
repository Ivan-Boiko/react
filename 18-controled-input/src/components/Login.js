import { useState } from 'react';
const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFromSubmit(event) {
    event.preventDefault();
    console.log(data.username);
    console.log(data.password);
  }

  function handleInputChange (e, name) {
    setData({ ...data, [name]: e.target.value })
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          UserName:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
