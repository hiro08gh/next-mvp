import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};
