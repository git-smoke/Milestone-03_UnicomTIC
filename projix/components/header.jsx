
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav>

      </nav>
 
 
 
 
 
 
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
