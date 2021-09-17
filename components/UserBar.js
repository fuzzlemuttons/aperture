import { signIn, signOut, useSession } from "next-auth/client";

export function UserBar() {
  const [session, loading] = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <code>{JSON.stringify(session, null, 4)}</code>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
