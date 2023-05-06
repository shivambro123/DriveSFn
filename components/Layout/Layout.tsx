import { PageLoader } from "@components/ui";
import { FC } from "react";
import s from "./Layout.module.scss";

interface Props {
  className?: string;
}
export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <PageLoader />
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default Layout;
