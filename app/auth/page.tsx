import LoginBtn from "./login-btn";
import UserInfoServer from "./user-info-server";

export default function Auth() {
  return (
    <div className="mt-4">
      <h1 className="bold text-2xl">Auth</h1>
      <LoginBtn>
        <UserInfoServer />
      </LoginBtn>
    </div>
  );
}
