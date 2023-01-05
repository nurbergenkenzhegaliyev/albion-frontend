import { useEffect, useContext, memo } from "react";
import { CraftItemContext } from "../../../context";
import { useSelector } from "react-redux";

function TotalExpense({ totalExpense, setTotalExpense, ench, journalAmount }) {
  const { arrayCraftingMethods, amount, option, maker, tier } = useContext(CraftItemContext);
  const { resources } = useSelector((state) => state.info);

  const looping = (materials, enchantment) => {
    let sum = 0;

    for (let obj in materials) {
      // Get unique name
      const uniquename = materials[obj]["@uniquename"];

      // Get amount
      const count = materials[obj]["@count"];

      // Initialize cost
      let cost = 0;

      // Check if material is artefact (they do not have enchantment level)
      if (!uniquename.includes("ARTEFACT")) {
        // If no enchantment
        if (enchantment === 0) {
          cost = resources[uniquename];
        } else {
          // Else change name and get cost from (redux) state
          cost =
            resources[uniquename + "_LEVEL" + enchantment + "@" + enchantment];
        }
      } else {
        // Get cost if it is arftefact
        cost = resources[uniquename];
      }

      // Add total cost of material to the sum
      sum += count * cost;
    }
    return sum*amount;
  };

  // Function calculates the cost for every enchant
  // 2. Journals (For now it will not be included)
  const calculation = (enchantment) => {
    // Initialize sum
    let sum = 0;

    // Get array of obj with material info depending on option
    let materials = [];

    if (Array.isArray(arrayCraftingMethods[option].craftresource)) {
      materials = arrayCraftingMethods[option].craftresource.slice(0);
    } else {
      materials.push(arrayCraftingMethods[option].craftresource);
    }
    // Loop through every material in the array
    sum = looping(materials, enchantment);

    // ОКРУГЛ((C13*0,1125/100)*$C$1)
    // Crafting tax
    // let craftingTax = (((480*0.1125)/100)*1400) * amount;

    // sum += craftingTax;

    let journalCost = resources["T" + tier + "_JOURNAL_" + maker.toUpperCase()] * journalAmount;
    sum += journalCost;

    // Return total cost of craft
    return Math.ceil(sum);
  };
  
  useEffect(() => {
    setTotalExpense(calculation(ench))
  }, [resources, amount, option])
  
 
  return <td>{totalExpense}</td>;
}

export default memo(TotalExpense);
