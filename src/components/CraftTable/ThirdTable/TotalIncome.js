import {useEffect, memo, useContext} from "react";
import { CraftItemContext } from "../../../context";
import { useSelector } from "react-redux";

function TotalIncome({ totalIncome, setTotalIncome, ench, sellPrice, journalAmount }) {
  const { arrayCraftingMethods, amount, option, returnRate, maker, tier } = useContext(CraftItemContext);
  const { resources } = useSelector((state) => state.info);


  // Loop through every material for crafting
  // Calculate cost and add to sum
  // Multiply to return bonus
  // Return cost of returned materials
  const looping = (materials, enchantment) => {
    // Initialize sum
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
      sum += (uniquename.includes("ARTEFACT") ? 0 : count*cost );
    }
    return sum*amount*returnRate;
  };

  // Function calculates the cost for every enchant
  // 1. Need to make proper return bonus variable
  // 2. Journals (For now it will not be included)
  const calculation = (enchantment) => {
    // Initialize sum
    let sumOfReturnedMaterials = 0;

    // Store crafting materials into array
    // some items can have only one material
    // thereby they are shown as object
    let materials = [];
    if (Array.isArray(arrayCraftingMethods[option].craftresource)) {
      materials = arrayCraftingMethods[option].craftresource.slice(0);
    } else {
      materials.push(arrayCraftingMethods[option].craftresource);
    }

    // Loop through materials to calculate cost
    // Get cost of returned materials
    sumOfReturnedMaterials = looping(materials, enchantment);

    // WITH PREMIUM
    // 4% for selling + 2.5% for sell order
    let selling = sellPrice*amount

    

    let total = Math.ceil((sumOfReturnedMaterials + selling))

    let journalCost = resources["T" + tier + "_JOURNAL_" + maker.toUpperCase() + "_FILLED"] * journalAmount;
    total += journalCost;

    // Return total cost of craft
    return (total*(1-0.065)).toFixed(0);
  };
  
  useEffect(() => {
    setTotalIncome(calculation(ench))
  }, [resources, amount, sellPrice, option, returnRate])
  
 
  return <td>{totalIncome}</td>;
}

export default memo(TotalIncome);
