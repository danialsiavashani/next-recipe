import { signOut } from '@/auth';

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" color="primary">
        Sing out
      </button>
    </form>
  );
}
export default SignOut;
