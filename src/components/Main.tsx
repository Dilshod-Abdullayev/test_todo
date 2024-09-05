import Footer from "./Footer";
import Nav from "./Navbar/Nav";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import Panel from "./Panel";
export default function Main() {
  const theme = useSelector((state: RootState) => state.mode)
  return (
    <div className={'container m-auto ' + (theme.value ? "dark" : '')}>
      <Nav />
      <Panel />
      <Footer />
    </div>
  )
}
