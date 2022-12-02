export default function UserInfo({ data }) {
  console.log("server or client");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
