import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relvance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Rel DAte</MenuItem>
        <MenuItem>jioavdfshjkol</MenuItem>
        <MenuItem>jkl;adlkj;sfdlkj;</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
