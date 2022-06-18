import { Header } from "./styles";
import { MainHeaderProps } from "./types";

const MainHeader = ({ header }: MainHeaderProps): JSX.Element => {
  return <Header>{header}</Header>;
};

export default MainHeader;
