import PropTypes from "prop-types";
import { memo, useContext } from "react";

import Button from "../../UI/Button/Button";
import { CraftContext } from "../../context.js";

export const TierButton = ({tier}) => {
  
  const { clickedTier, setClickedTier } =
    useContext(CraftContext);

  return (
    <Button onclick={()=>setClickedTier(tier)} style={"tier"+tier} active={clickedTier===tier}>
      Tier {tier}
    </Button>
  );
};

TierButton.propTypes = {
  tier: PropTypes.string,
};

export default memo(TierButton);
