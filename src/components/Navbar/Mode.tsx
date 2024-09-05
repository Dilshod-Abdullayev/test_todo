import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { handleToggle } from "../../redux/Mode";
import { motion } from "framer-motion";

export default function Mode() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.mode);
  
  const handleClick = () => {
    dispatch(handleToggle());
  };
  
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="cursor-pointer text-4xl"
      data-testid="mode-button"
    >
      {theme.value ? (
        <FaMoon data-testid="moon-icon" />
      ) : (
        <FaSun data-testid="sun-icon" />
      )}
    </motion.div>
  );
}