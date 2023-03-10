import React,{useEffect} from 'react';
import TableInput from '../TableInput/TableInput';
import axios from '../../axios.js';
import PropTypes from "prop-types";

function ArtefactTableRow({item}) {
    
  const [localizedName, setLocalizedName] = React.useState("Empty");

  const getter = async (uniqueName) => {
    const response = await axios.post("/info/getItemLocalization", {
      uniqueName,
    });
    let name = response.data.LocalizedNames["EN-US"];
    setLocalizedName((prev) => name.replace("Adept's",""));
  };

  let uniquename = "T4_"+item;

  useEffect(() => {
    getter(uniquename);
  }, [uniquename]);




  return (
    <tr key={item}>
        <td>{localizedName}</td>
        {
            [4,5,6,7,8].map(tier => (
                <TableInput key={tier} uniqueName={"T"+tier+"_"+item}/>
            ))
        }
    </tr>
  )
}

ArtefactTableRow.propTypes = {
  item: PropTypes.string
};


export default React.memo(ArtefactTableRow)