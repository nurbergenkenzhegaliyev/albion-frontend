import PropTypes from 'prop-types';
import { memo } from 'react';
import Button from '../../UI/Button/Button';

export const UpdateResourceButton = ({onclick}) => {
  return (
    <Button onclick={onclick} style={"update"}> 
        Update resource prices
    </Button>
  )
}

UpdateResourceButton.propTypes = {
    onclick: PropTypes.func,
}

export default memo(UpdateResourceButton);