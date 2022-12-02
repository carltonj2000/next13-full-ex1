/* did not get this working
 *  could not call server component from a client
 *  under development still i guess
 */

//import { authOptions } from "../../pages/api/auth/[...nextauth]";
//import { unstable_getServerSession } from "next-auth/next";
//import { useSession } from "next-auth/react";

export default function UserInfo() {
  console.log("server or client 2");
  return <p>hi</p>;
  //  const { data: session } = useSession();
  //  return <pre>{JSON.stringify(session?.user, null, 2)}</pre>;
}

/*
export async function getServerSideProps({ context }) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  };
}
*/
