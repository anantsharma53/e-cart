import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <input className="btn btn-primary" value="Login" type="submit" />
    </div>
  );
}

export default Login;
